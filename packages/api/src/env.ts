import { z } from 'zod';

export const ENV_KEYS = Object.freeze({
	DATABASE_URL: 'DATABASE_URL',
	PORT: 'PORT'
});

export const envSchema = z.object(
	Object.freeze({
		[ENV_KEYS.DATABASE_URL]: z.string().url(),
		[ENV_KEYS.PORT]: z.coerce.number().optional().default(8080)
	})
);

export type Env = z.infer<typeof envSchema>;
