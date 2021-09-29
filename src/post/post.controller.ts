import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
	constructor(private postService: PostService) {}

	@Get()
	getAllPosts(): string {
		return this.postService.getAllPosts();
	}

	@Get(':id')
	getPostById(@Param() params): string {
		return this.postService.getPostById();
	}

	@Post()
	createPost(@Body() post): string {
		return this.postService.createPost();
	}

	@Put()
	updateUser(@Body() post): string {
		return this.postService.updatePost();
	}

	@Delete(':id')
	deletePost(@Param() Params): string {
		return this.postService.deletePost();
	}
}
