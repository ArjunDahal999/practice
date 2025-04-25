import { registerAs } from '@nestjs/config';
import { JwtModuleOptions, JwtSignOptions } from '@nestjs/jwt';

export default registerAs(
  'refresh',
  (): JwtSignOptions => ({
    secret: process.env.JWT_REFRESH_TOKEN,
    expiresIn: process.env.JWT_REFRESH_EXPIRE_IN,
  }),
);
