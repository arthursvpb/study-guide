import { Module } from '@nestjs/common';

import { GoalsModule } from './goals/goals.module';
import { PrismaService } from './database/prisma.service';

@Module({
	imports: [GoalsModule],
	controllers: [],
	providers: [PrismaService]
})
export class AppModule {}
