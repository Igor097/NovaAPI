import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
	getAllCategories(): string {
		return 'GetAllCategories';
	}
	getCategoryById(): string {
		return 'GetCategoryById';
	}
	createCategory(): string {
		return 'CreateCategory';
	}
	updateCategory(): string {
		return 'UpdateCategory';
	}
	deleteCategory(): string {
		return 'DeleteCategory';
	}
}
