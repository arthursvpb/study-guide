import { Module } from '@nestjs/common';

import { AuthenticateController } from './controllers/authenticate.controller';
import { CreateAccountController } from './controllers/create-account.controller';

import { PrismaService } from '@/infra/database/prisma.service';
import { CreateGoalController } from './controllers/create-goal.controller';

@Module({
	controllers: [
		CreateAccountController,
		CreateGoalController,
		AuthenticateController
	],
	providers: [PrismaService]
})
export class HttpModule {}
