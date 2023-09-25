import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma.service';
import { CreateAccountController } from './controllers/create-account.controller';
import { ConfigModule } from '@nestjs/config';
import { Env, envSchema } from './env';

@Module({
	imports: [
		ConfigModule.forRoot({
			validate: (env: Env) => envSchema.parse(env),
			isGlobal: true
		})
	],
	controllers: [CreateAccountController],
	providers: [PrismaService]
})
export class AppModule {}
