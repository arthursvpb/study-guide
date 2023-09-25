import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma.service';
import { CreateAccountController } from './controllers/create-account.controller';

@Module({
	imports: [],
	controllers: [CreateAccountController],
	providers: [PrismaService]
})
export class AppModule {}
