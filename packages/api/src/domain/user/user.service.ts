import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

import { UserRepository } from '@/infra/database/repositories/user.repository';

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async create(user: User): Promise<User> {
		return this.userRepository.create(user);
	}

	findAll(): Promise<User[]> {
		return this.userRepository.findAll();
	}

	findOne(id: string): Promise<User> {
		return this.userRepository.findOne(id);
	}

	update(id: string, user: User): Promise<User> {
		return this.userRepository.update(id, user);
	}

	remove(id: string): Promise<void> {
		return this.userRepository.remove(id);
	}
}
