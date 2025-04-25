import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { User } from 'src/user/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //@UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    console.log('1');
    console.log(req.user);
    console.log('2');
    const token = this.authService.login(req.user.id);
    return { ...token };
  }

  @Get('refresh/:token')
  generateRefreshToken(@Param('token') token: string) {
    if (!token) return new UnauthorizedException();
    return this.authService.generateAccessToken(token);
  }
}
