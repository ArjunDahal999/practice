import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import jwtConfig from '../config/jwt.config';
import { AuthJwtPayload } from '../types/auth.jwt-payload';
import { Inject } from '@nestjs/common';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(jwtConfig.KEY)
    jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfiguration.secret!,
      ignoreExpiration: false,
    });
  }

  validate(payload: AuthJwtPayload) {
    console.log('this is play load ' + payload); // this payload hold the information that is decoded from the jwt
    console.log(payload);
    return { id: payload.sub };
    /*
     */
    // whatever things are  returned will be insde the user obeject in the part of request object  req:{ user:{test:"asdfasdf"},...other request properties}
    return { ...payload };
  }
}
