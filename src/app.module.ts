import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PrismaService } from './prisma.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
	imports: [],
	controllers: [
		AppController,
		UserController,
		PostController,
		CategoryController,
	],
	providers: [
		AppService,
		UserService,
		PostService,
		CategoryService,
		PrismaService,
	],
})
export class AppModule {}
