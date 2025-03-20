import { registerAs } from '@nestjs/config';
export default registerAs('test.config.dev', () => ({
  name: 'ArjunDahal',
}));
