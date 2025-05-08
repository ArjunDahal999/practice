import { z } from 'zod';

const envVariable = z.object({
  DB_TYPE: z.literal('postgres'),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
  NAME: z.string(),
  ACCESS_TOEKN_JWT_SECRET: z.string(),
  ACCESS_TOKEN_JWT_EXPIRES_IN: z.string(),
  REFRESH_TOEKN_JWT_SECRET: z.string(),
  REFRESH_TOKEN_JWT_EXPIRES_IN: z.string(),
  GOOGLE_ID: z.string(),
  GOOGLE_SECRET: z.string(),
  GOOGLE_CALLBACK_URL: z.string(),
});

envVariable.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariable> {}
  }
}
