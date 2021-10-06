import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { Category } from '@prisma/client';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Get()
	async getAllCategories(): Promise<Category[]> {
		return this.categoryService.getAllCategories({});
	}

	@Get(':id')
	async getCategoryById(@Param() params): Promise<Category> {
		return this.categoryService.getCategoryById({
			categoryId: Number(params.id),
		});
	}

	@Post()
	async createCategory(
		@Body()
		category: {
			name: string;
		},
	): Promise<Category> {
		const { name } = category;
		return this.categoryService.createCategory({
			name,
		});
	}

	@Put(':id')
	async updateCategory(@Body() category): Promise<Category> {
		return this.categoryService.updateCategory({
			where: { categoryId: Number(category.id) },
			data: { ...category },
		});
	}

	@Delete(':id')
	async deleteCategory(@Param() params): Promise<Category> {
		return this.categoryService.deleteCategory({
			categoryId: Number(params.id),
		});
	}
}
