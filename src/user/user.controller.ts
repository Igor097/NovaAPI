import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';

@Controller('user')
export class UserController {
	@Get()
	getAll(): string {
		return 'All Users';
	}

	@Get(':id')
	getUserById(@Param() params): string {
		return `User ${params.id}`;
	}

	@Post()
	createUser(@Body() user): string {
		console.log(user);
		return `User create : ${user}`;
	}

	@Put()
	updateUser(@Body() user): string {
		console.log(user);
		return 'User update change';
	}

	@Delete(':id')
	deleteUser(@Param() params): string {
		console.log(params);
		return 'User delete';
	}
}
