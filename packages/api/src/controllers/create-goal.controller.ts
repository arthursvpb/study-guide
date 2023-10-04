import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Prisma } from '@prisma/client';
import { UserPayload } from 'src/auth/jwt.strategy';
import { CurrentUser } from 'src/decorators/current-user.decorator';

@Controller('goals')
@UseGuards(AuthGuard('jwt'))
export class CreateGoalController {
	constructor() {}

	@Post()
	handle(
		@CurrentUser() user: UserPayload,
		@Body() data: Prisma.GoalCreateInput
	) {
		console.log('user', user.sub);
	}
}
