import { registerAs } from '@nestjs/config';

export default registerAs('userconfig', () => ({
  secret: process.env.SECRET_KEY,
}));
