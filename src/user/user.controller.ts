import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	getAll(): string {
		return this.userService.getAll();
	}

	@Get(':id')
	getUserById(@Param() params): string {
		return this.userService.getUserById();
	}

	@Post()
	createUser(@Body() user): string {
		return this.userService.createUser();
	}

	@Put()
	updateUser(@Body() user): string {
		return this.userService.updateUser();
	}

	@Delete(':id')
	deleteUser(@Param() params): string {
		return this.userService.deleteUser();
	}
}
