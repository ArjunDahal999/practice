import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService.findOne(loginDto.email);
    if (!user) return new UnauthorizedException(' invalid email');
    const passwordValid = bcrypt.compareSync(loginDto.password, user?.password);
    if (!passwordValid) return new UnauthorizedException('invalid password');
    return {
      jwt: 'fasdfa',
      user,
    };
  }
}
