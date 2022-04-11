import {
	Controller,
	Get,
	Post,
	Body,
	Put,
	Param,
	Delete
} from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { GoalsService } from './goals.service';

@Controller('goals')
export class GoalsController {
	constructor(private readonly goalsService: GoalsService) {}

	@Post()
	create(@Body() data: Prisma.GoalCreateInput) {
		return this.goalsService.create(data);
	}

	@Get('user/:user_id')
	findAllByUserId(@Param('user_id') user_id: string) {
		return this.goalsService.findAll({ where: { user_id } });
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.goalsService.findOne({ id });
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() data: Prisma.GoalUpdateInput) {
		return this.goalsService.update({ where: { id }, data });
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.goalsService.remove({ id });
	}
}
