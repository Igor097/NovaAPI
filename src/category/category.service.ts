import { Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}
	async getAllCategories(params: {
		skip?: number;
		take?: number;
		cursor?: Prisma.CategoryWhereUniqueInput;
		where?: Prisma.CategoryWhereInput;
		orderBy?: Prisma.CategoryOrderByWithRelationInput;
	}): Promise<Category[]> {
		const { skip, take, cursor, where, orderBy } = params;
		return this.prisma.category.findMany({
			skip,
			take,
			cursor,
			where,
			orderBy,
		});
	}
	async getCategoryById(
		category: Prisma.CategoryWhereUniqueInput,
	): Promise<Category> {
		return this.prisma.category.findUnique({
			where: category,
		});
	}
	async createCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
		return this.prisma.category.create({
			data,
		});
	}
	async updateCategory(params: {
		where: Prisma.CategoryWhereUniqueInput;
		data: Prisma.CategoryUpdateInput;
	}): Promise<Category> {
		const { where, data } = params;
		return this.prisma.category.update({
			data,
			where,
		});
	}
	async deleteCategory(
		where: Prisma.CategoryWhereUniqueInput,
	): Promise<Category> {
		return this.prisma.category.delete({
			where,
		});
	}
}
