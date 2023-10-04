import { z } from 'zod';

export const ENV_KEYS = Object.freeze({
	DATABASE_URL: 'DATABASE_URL',
	SERVER_PORT: 'SERVER_PORT',
	JWT_SECRET: 'JWT_SECRET'
});

export const envSchema = z.object({
	[ENV_KEYS.JWT_SECRET]: z.string(),
	[ENV_KEYS.DATABASE_URL]: z.string().url(),
	[ENV_KEYS.SERVER_PORT]: z.coerce.number().optional().default(8080)
});

export type Env = z.infer<typeof envSchema>;
