import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('goals')
@UseGuards(AuthGuard('jwt'))
export class CreateGoalController {
	constructor() {}

	@Post()
	handle() {
		return 'ok';
	}
}
