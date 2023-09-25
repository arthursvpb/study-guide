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
import { UsersService } from './users.service';

@Controller('accounts')
export class CreateAccountController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	create(@Body() data: Prisma.UserCreateInput) {
		return this.usersService.create(data);
	}

	// @Get()
	// findAll() {
	// 	return this.usersService.findAll({});
	// }

	// @Get(':id')
	// findOne(@Param('id') id: string) {
	// 	return this.usersService.findOne({ id });
	// }

	// @Put(':id')
	// update(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput) {
	// 	return this.usersService.update({ where: { id }, data });
	// }

	// @Delete(':id')
	// remove(@Param('id') id: string) {
	// 	return this.usersService.remove({ id });
	// }

	// @Post('/auth')
	// async authenticate(@Body() data: Prisma.UserCreateInput) {
	// 	const user = this.usersService.authenticate(data);

	// 	if (user) {
	// 		return user;
	// 	}

	// 	return 'Wrong username or password';
	// }
}
