import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ENV_KEYS, Env } from 'src/env';
import { JwtStrategy } from './jwt.strategy';

const useFactory = (config: ConfigService<Env, true>) => ({
	secret: config.get(ENV_KEYS.JWT_SECRET)
});

@Module({
	providers: [JwtStrategy],
	imports: [
		PassportModule,
		JwtModule.registerAsync({
			inject: [ConfigService],
			global: true,
			useFactory
		})
	]
})
export class AuthModule {}
