import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostService {
	constructor(private prisma: PrismaService) {}
	async getAllPosts(params: {
		skip?: number;
		take?: number;
		cursor?: Prisma.PostWhereUniqueInput;
		where?: Prisma.PostWhereInput;
		orderBy?: Prisma.PostOrderByWithRelationInput;
	}): Promise<Post[]> {
		const { skip, take, cursor, where, orderBy } = params;
		return this.prisma.post.findMany({
			skip,
			take,
			cursor,
			where,
			orderBy,
		});
	}
	async getPostById(post: Prisma.PostWhereUniqueInput): Promise<Post | null> {
		return this.prisma.post.findUnique({
			where: post,
		});
	}
	async createPost(data: Prisma.PostCreateInput): Promise<Post> {
		return this.prisma.post.create({
			data,
		});
	}
	async updatePost(params: {
		where: Prisma.PostWhereUniqueInput;
		data: Prisma.PostUpdateInput;
	}): Promise<Post> {
		const { where, data } = params;
		return this.prisma.post.update({
			data,
			where,
		});
	}
	async deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
		return this.prisma.post.delete({
			where,
		});
	}
}
