import { registerAs } from '@nestjs/config';
import { JwtModuleOptions, JwtSignOptions } from '@nestjs/jwt';

export default registerAs(
  'jwt.config',
  (): JwtModuleOptions => ({
    secret: process.env.ACCESS_TOEKN_JWT_SECRET,
    signOptions: {
      expiresIn: process.env.ACCESS_TOKEN_JWT_EXPIRES_IN,
    },
  }),
);
