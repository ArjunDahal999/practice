import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }
  // this will be automaticall invloked , it will extract from the request body
  async validate(email: string, password: string) {
    console.log(email);
    console.log(password);
    console.log('fasdfasdfa');
    const user = await this.authService.login({ email, password });
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return user;
  }
}
