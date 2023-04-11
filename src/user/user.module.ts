import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { UserEntity } from './entity/user';
import { TaskModule } from 'src/task/task.module';
import { TaskService } from 'src/task/task.service';
import { TaskRepository } from 'src/task/repository/task.repository';
import { TaskEntity } from 'src/task/entity/task';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      TaskEntity,
    ])],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    TaskModule,
    TaskService,
    TaskRepository,
  ],
})
export class UserModule {}
