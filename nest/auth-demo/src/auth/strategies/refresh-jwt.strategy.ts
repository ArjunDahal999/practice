import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';
import refreshJwtConfig from '../config/refresh-jwt.config';
import { Request } from 'express';
import { AuthService } from '../auth.service';

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(
  Strategy,
  'refresh-jwt',
) {
  constructor(
    @Inject(refreshJwtConfig.KEY)
    private refreshJwtConfiguration: ConfigType<typeof refreshJwtConfig>,
    private authServices: AuthService,
  ) {
    super({
      // jwtFromRequest: ExtractJwt.fromBodyField("refreshToken"),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: refreshJwtConfiguration.secret!,
      passReqToCallback: true, // this allow to access the request object in the validate
    });
  }

  async validate(req: Request, payload: any) {
    const refreshToken = req.get('authorization')?.split(' ')[1];
    return this.authServices.validateRefreshToken(
      payload.userId,
      refreshToken!,
    );
  }
}
