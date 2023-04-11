import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { TaskEntity } from './entity/task';
import { TaskService } from './task.service';
import { TaskRepository } from './repository/task.repository';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/entity/user';
import { UserRepository } from 'src/user/repository/user.repository';
@Module({
  imports: [TypeOrmModule.forFeature([
    TaskEntity,
    UserEntity,
  ])],
  controllers: [TaskController],
  providers: [
    TaskService,
    TaskRepository,
    UserService,
    UserRepository,
  ],
})
export class TaskModule {}
