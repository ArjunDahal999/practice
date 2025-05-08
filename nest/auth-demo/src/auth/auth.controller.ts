import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RefreshAuthGuard } from './guards/refresh-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthPayload } from './types/auth-payload.types';
import { GoogleAuthGuard } from './guards/google-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //. Our Passport local strategy has a default name of 'local'. We reference that name in the @UseGuards() decorator to associate it with code supplied by the passport-local package.
  //@UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    // after validating the user , anything we return form that function will be automatically attached tot req.user
    return this.authService.login(req.user);
  }

  @UseGuards(RefreshAuthGuard)
  @Post('refresh')
  refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('signout')
  async logout(@Request() req: { user: AuthPayload }) {
    return this.authService.handleSignOut(req.user.userId);
  }

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  googleLogin() {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleCallBack(@Req() req, @Res() res) {
    console.log(req.user);
    const response = await this.authService.login(req.user);
    res.redirect(`http://localhost:5173?token=${response.refreshToken}`);
  }
}
