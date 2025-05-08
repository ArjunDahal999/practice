import {
  Inject,
  Injectable,
  Type,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import refreshJwtConfig from './config/refresh-jwt.config';
import { ConfigType } from '@nestjs/config';
import { AuthPayload } from './types/auth-payload.types';
import * as argon2 from 'argon2';
import { CurrentUser } from './types/current-user';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    @Inject(refreshJwtConfig.KEY)
    private refreshJwtSerive: ConfigType<typeof refreshJwtConfig>,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const isPasswordMatch = await bcrypt.compare(pass, user.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException("Password Doesn't match");
    }
    const { password, ...result } = user;
    return result;
  }

  async login(user: User) {
    // const payload: AuthPayload = { userId: user.id, userEmail: user.email };
    const { accessToken, refreshToken } = await this.generateTokens(
      user.id,
      user.email,
    );
    const hashRefreshToken = await argon2.hash(refreshToken);
    console.log(hashRefreshToken);
    const updatedUserWithHashedRefreshToken =
      await this.usersService.updateHashedRefreshToken(
        user.id,
        hashRefreshToken,
      );

    return {
      userId: user.id,
      accessToken,
      refreshToken,
      updatedUserWithHashedRefreshToken,
    };
  }

  async generateTokens(userId: number, userEmail: string) {
    const payload: AuthPayload = { userId, userEmail };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshJwtSerive),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(user: User) {
    const payload: AuthPayload = { userId: user.id, userEmail: user.email };
    console.log(payload);
    const { accessToken, refreshToken } = await this.generateTokens(
      user.id,
      user.email,
    );
    const hashedRefreshToken = await argon2.hash(refreshToken);
    await this.usersService.updateHashedRefreshToken(
      user.id,
      hashedRefreshToken,
    );
    return {
      userId: user.id,
      accessToken,
      refreshToken,
    };
  }

  async validateRefreshToken(userId: number, refreshToken: string) {
    const user = await this.usersService.findOne(userId);
    console.log(user);
    console.log(refreshToken);
    if (!user?.hashedRefreshToken || !refreshToken)
      throw new UnauthorizedException('Invalid Refresh  Token');
    const refreshTokenMatches = await argon2.verify(
      user.hashedRefreshToken,
      refreshToken,
    );
    console.log(refreshTokenMatches);
    if (!refreshTokenMatches)
      throw new UnauthorizedException('Invalid Refresh Token');
    return {
      id: userId,
      email: user.email,
    };
  }

  async handleSignOut(userId: number) {
    await this.usersService.updateHashedRefreshToken(userId, null);
    return {
      message: 'User Loggedout',
      success: true,
    };
  }

  async validateJwtUser(userId: number) {
    const user = await this.usersService.findOne(userId);
    if (!user) throw new UnauthorizedException('User not found ');
    const currentUser: CurrentUser = {
      email: user.email,
      id: user.id,
      role: user.role,
    };
    return currentUser;
  }

  async validateGoogleUser(googleUser: CreateUserDto) {
    const user = await this.usersService.findOneByEmail(googleUser.email);
    console.log(user);
    if (user) return user;
    return await this.usersService.create(googleUser);
  }
}
