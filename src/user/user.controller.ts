import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	async getAllUsers(): Promise<User[]> {
		return this.userService.getAllUsers({});
	}

	@Get(':id')
	async getUserById(@Param() params): Promise<User> {
		return this.userService.getUserById({
			userId: Number(params.id),
		});
	}

	@Post()
	async createUser(
		@Body()
		user: {
			firstName: string;
			lastName: string;
			email: string;
			description: string;
			phoneNumber: string;
			birthdayDate: Date;
		},
	): Promise<User> {
		const {
			firstName,
			lastName,
			email,
			description,
			phoneNumber,
			birthdayDate,
		} = user;
		return this.userService.createUser({
			firstName,
			lastName,
			email,
			description,
			phoneNumber,
			birthdayDate,
		});
	}

	@Put('id')
	async updateUser(@Body() user): Promise<User> {
		return this.userService.updateUser({
			where: { userId: Number(user.id) },
			data: { ...user },
		});
	}

	@Delete(':id')
	async deleteUser(@Param() params): Promise<User> {
		return this.userService.deleteUser({
			userId: Number(params.id),
		});
	}
}
