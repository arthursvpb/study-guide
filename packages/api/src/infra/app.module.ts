import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { Env, envSchema } from './env';

import { AuthModule } from './auth/auth.module';
import { HttpModule } from './http/http.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			validate: (env: Env) => envSchema.parse(env),
			isGlobal: true
		}),
		AuthModule,
		HttpModule
	]
})
export class AppModule {}
