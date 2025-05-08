import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  // here the values will be appended to the req.user  which is returned by validateUser service
  async validate(email: string, password: string) {
    try {
      const user = await this.authService.validateUser(email, password);
      if (!user) {
        throw new Error('Invalid credentials');
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
}
