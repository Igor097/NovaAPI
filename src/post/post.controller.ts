import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { Post as NPost } from '@prisma/client';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
	constructor(private readonly postService: PostService) {}

	@Get()
	async getAllPosts(): Promise<NPost[]> {
		return this.postService.getAllPosts({});
	}

	@Get(':id')
	async getPostById(@Param() params): Promise<NPost> {
		return this.postService.getPostById({
			postId: Number(params.id),
		});
	}

	@Post()
	async createPost(
		@Body()
		post: {
			title: string;
			subtitle: string;
			content: string;
			published: boolean;
			publicationDate: Date;
		},
	): Promise<NPost> {
		const { title, subtitle, content, published, publicationDate } = post;
		return this.postService.createPost({
			title,
			subtitle,
			content,
			published,
			publicationDate,
		});
	}

	@Put(':id')
	async updateUser(@Body() post): Promise<NPost> {
		return this.postService.updatePost({
			where: { postId: Number(post.id) },
			data: { ...post },
		});
	}

	@Delete(':id')
	async deletePost(@Param() params): Promise<NPost> {
		return this.postService.deletePost({
			postId: Number(params.id),
		});
	}
}
