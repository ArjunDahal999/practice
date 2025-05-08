import { registerAs } from '@nestjs/config';
import { JwtModuleOptions, JwtSignOptions } from '@nestjs/jwt';

export default registerAs(
  'refresh',
  (): JwtSignOptions => ({
    secret: process.env.REFRESH_TOEKN_JWT_SECRET,
    expiresIn: process.env.REFRESH_TOKEN_JWT_EXPIRES_IN,
  }),
);
