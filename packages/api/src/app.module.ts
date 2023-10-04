import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma.service';
import { CreateAccountController } from './controllers/create-account.controller';
import { ConfigModule } from '@nestjs/config';
import { Env, envSchema } from './env';
import { AuthModule } from './auth/auth.module';
import { AuthenticateController } from './controllers/authenticate.controller';

@Module({
	imports: [
		ConfigModule.forRoot({
			validate: (env: Env) => envSchema.parse(env),
			isGlobal: true
		}),
		AuthModule
	],
	controllers: [CreateAccountController, AuthenticateController],
	providers: [PrismaService]
})
export class AppModule {}
