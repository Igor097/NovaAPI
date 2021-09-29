import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
	constructor(private categoryService: CategoryService) {}

	@Get()
	getAllCategories(): string {
		return this.categoryService.getAllCategories();
	}

	@Get(':id')
	getCategoryById(@Param() params): string {
		return this.categoryService.getCategoryById();
	}

	@Post()
	createCategory(@Body() category): string {
		return this.categoryService.createCategory();
	}

	@Put()
	updateCategory(@Body() category): string {
		return this.categoryService.updateCategory();
	}

	@Delete(':id')
	deleteCategory(@Param() params): string {
		return this.categoryService.deleteCategory();
	}
}
