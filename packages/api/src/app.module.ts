import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma.service';
import { CreateAccountController } from './controllers/create-account.controller';
import { ConfigModule } from '@nestjs/config';
import { Env, envSchema } from './env';
import { AuthModule } from './auth/auth.module';
import { AuthenticateController } from './controllers/authenticate.controller';
import { CreateGoalController } from './controllers/create-goal.controller';

@Module({
	imports: [
		AuthModule,
		ConfigModule.forRoot({
			validate: (env: Env) => envSchema.parse(env),
			isGlobal: true
		})
	],
	controllers: [
		CreateAccountController,
		CreateGoalController,
		AuthenticateController
	],
	providers: [PrismaService]
})
export class AppModule {}
