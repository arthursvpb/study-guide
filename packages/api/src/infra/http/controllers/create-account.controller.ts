import { Controller, Post, Body, HttpCode, UsePipes } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { PrismaService } from '@/infra/database/prisma.service';

import { z } from 'zod';

import { hashSync } from 'bcryptjs';
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe';

const bodySchemaValidator = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string()
});

@Controller('accounts')
export class CreateAccountController {
	constructor(private prisma: PrismaService) {}

	@Post()
	@HttpCode(201)
	@UsePipes(new ZodValidationPipe(bodySchemaValidator))
	handle(@Body() data: Prisma.UserCreateInput) {
		const user = { ...data, password: hashSync(data.password, 8) };

		return this.prisma.user.create({ data: user });
	}
}
