import { Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateAccountController } from './create-account.controller';

@Module({
	controllers: [CreateAccountController],
	providers: [UsersService]
})
export class UsersModule {}
