import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ENV_KEYS, Env } from '@/infra/env';
import { z } from 'zod';

const tokenSchema = z.object({
	sub: z.string().uuid()
});

export type UserPayload = z.infer<typeof tokenSchema>;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(config: ConfigService<Env, true>) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.get(ENV_KEYS.JWT_SECRET, { infer: true }),
			ignoreExpiration: false
		});
	}

	async validate(payload: UserPayload) {
		return tokenSchema.parse(payload);
	}
}
