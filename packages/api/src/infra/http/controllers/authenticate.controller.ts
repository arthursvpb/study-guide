import {
	Controller,
	Post,
	Body,
	UsePipes,
	UnauthorizedException
} from '@nestjs/common';

import { PrismaService } from '@/infra/database/prisma.service';

import { z } from 'zod';

import { JwtService } from '@nestjs/jwt';
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe';
import { compare } from 'bcryptjs';

const bodySchemaValidator = z.object({
	email: z.string().email(),
	password: z.string()
});

type AuthenticateBodySchema = z.infer<typeof bodySchemaValidator>;

@Controller('sessions')
export class AuthenticateController {
	constructor(private jwt: JwtService, private prisma: PrismaService) {}

	@Post()
	@UsePipes(new ZodValidationPipe(bodySchemaValidator))
	async handle(@Body() body: AuthenticateBodySchema) {
		const { email, password } = body;

		const user = await this.prisma.user.findUnique({
			where: { email }
		});

		if (!user)
			throw new UnauthorizedException('User credentials does not match.');

		const isPasswordValid = await compare(password, user.password);

		if (!isPasswordValid)
			throw new UnauthorizedException('User credentials does not match.');

		return { access_token: this.jwt.sign({ sub: user.id }) };
	}
}
