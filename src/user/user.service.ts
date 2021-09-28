import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
	getAll(): string {
		return 'GetAll';
	}
	getUserById(): string {
		return 'GetUserById';
	}
	createUser(): string {
		return 'CreateUser';
	}
	updateUser(): string {
		return 'UpdateUser';
	}
	deleteUser(): string {
		return 'DeleteUser';
	}
}
