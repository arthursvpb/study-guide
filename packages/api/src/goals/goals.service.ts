import { Injectable } from '@nestjs/common';

import { PrismaService } from '../database/prisma.service';

import { Prisma, Goal } from '@prisma/client';

@Injectable()
export class GoalsService {
	constructor(private prisma: PrismaService) {}

	async create(data: Prisma.GoalCreateInput) {
		return this.prisma.goal.create({ data });
	}

	async findAll(params: {
		skip?: number;
		take?: number;
		cursor?: Prisma.GoalWhereUniqueInput;
		where?: Prisma.GoalWhereInput;
		orderBy?: Prisma.GoalOrderByWithRelationInput;
	}): Promise<Goal[]> {
		const { skip, take, cursor, where, orderBy } = params;
		return this.prisma.goal.findMany({
			skip,
			take,
			cursor,
			where,
			orderBy
		});
	}

	async findOne(
		goalWhereUniqueInput: Prisma.GoalWhereUniqueInput
	): Promise<Goal | null> {
		return this.prisma.goal.findUnique({
			where: goalWhereUniqueInput
		});
	}

	async update(params: {
		where: Prisma.GoalWhereUniqueInput;
		data: Prisma.GoalUpdateInput;
	}): Promise<Goal> {
		const { where, data } = params;
		return this.prisma.goal.update({
			data,
			where
		});
	}

	async remove(where: Prisma.GoalWhereUniqueInput): Promise<Goal> {
		return this.prisma.goal.delete({
			where
		});
	}
}
