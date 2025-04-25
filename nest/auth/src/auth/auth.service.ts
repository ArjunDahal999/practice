import {
  HttpException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload } from './types/auth.jwt-payload';
import { User } from 'src/user/entities/user.entity';
import { ConfigType } from '@nestjs/config';
import refreshTokenConfig from './config/refresh-token.config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @Inject(refreshTokenConfig.KEY)
    private refreshTokenConfiguration: ConfigType<typeof refreshTokenConfig>,
  ) {}

  async validateUser(loginDto: LoginDto) {
    const user = await this.userService.findOne(loginDto.email);
    if (!user) return new UnauthorizedException(' invalid email');
    const passwordValid = bcrypt.compareSync(loginDto.password, user?.password);
    if (!passwordValid) return new UnauthorizedException('invalid password');
    const { password: _, ...result } = user;
    return user;
  }

  login(userId: number) {
    const payload: AuthJwtPayload = {
      sub: userId,
    };
    const token = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(
      payload,
      this.refreshTokenConfiguration,
    );
    return {
      token,
      refreshToken,
      userId,
    };
  }

  generateAccessToken(token: string) {
    const data = this.jwtService.verify(token, this.refreshTokenConfiguration);
    if (data) return new UnauthorizedException();
    const payload: AuthJwtPayload = {
      sub: data.sub,
    };
    const newToken = this.jwtService.sign(payload);
    return {
      id: data.sub,
      newToken,
    };
  }
}
