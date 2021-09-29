import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
	getAllPosts(): string {
		return 'GetAllPosts';
	}
	getPostById(): string {
		return 'GetPostsById';
	}
	createPost(): string {
		return 'CreatePost';
	}
	updatePost(): string {
		return 'UpdatePost';
	}
	deletePost(): string {
		return 'DeletePost';
	}
}
