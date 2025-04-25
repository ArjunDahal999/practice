import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  name: process.env.NAME,
}));
