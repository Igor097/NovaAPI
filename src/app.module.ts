import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
	imports: [UserModule, PostModule, CategoryModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
