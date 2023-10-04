import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class UserRepository {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	async create(user: User): Promise<User> {
		return this.prisma.user.create({ data: user });
	}

	async findAll(): Promise<User[]> {
		return this.prisma.user.findMany();
	}

	async findOne(id: string): Promise<User> {
		return this.prisma.user.findUnique({ where: { id } });
	}

	async update(id: string, user: User): Promise<User> {
		return this.prisma.user.update({ where: { id }, data: user });
	}

	async remove(id: string): Promise<void> {
		await this.prisma.user.delete({ where: { id } });
	}
}
