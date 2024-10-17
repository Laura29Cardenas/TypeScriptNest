import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsController } from './controllers/bootcamps.controller';
import { UsersController } from './controllers/users.controller';
import { CoursesController } from './controllers/courses.controller';
import { ReviewsController } from './controllers/reviews.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampsController, UsersController, CoursesController, ReviewsController],
  providers: [AppService],
})
export class AppModule {}
