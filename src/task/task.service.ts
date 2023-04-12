import { Injectable } from '@nestjs/common'
import { TaskRepository } from './repository/task.repository';
import { UserEntity } from 'src/user/entity/user';
import { UserRepository } from 'src/user/repository/user.repository';
import { AddTaskRequestDto } from './dto/add.task.req.dto';
import { AddTaskResponseDto } from './dto/add.task.res.dto';
import { GetTasksResponseDto } from './dto/get.tasks.res.dto';
import { UpdateTaskRequestDto } from './dto/update.task.req.dto';
import { UpdateTaskResponseDto } from './dto/update.task.res.dto';
import { DeleteTaskResponseDto } from './dto/delete.task.res.dto';
import { TaskEntity } from './entity/task';

@Injectable()
export class TaskService {
    constructor(
        private taskRepository: TaskRepository,
        private userRepository: UserRepository,
      ) {}

    async addTask(addTaskRequestDto: AddTaskRequestDto): Promise<AddTaskResponseDto> {
      const userEntity: UserEntity = await this.userRepository.findOne({where: {id: addTaskRequestDto.userId}});
      const taskEntity: TaskEntity = new TaskEntity();

      taskEntity.userId = userEntity;
      taskEntity.taskName = addTaskRequestDto.taskName;
      taskEntity.date = new Date(addTaskRequestDto.date);
      if(addTaskRequestDto.description) {
        taskEntity.description = addTaskRequestDto.description;
      }

      return await this.taskRepository.addTask(taskEntity);
    }

    async getTasks(userId: number): Promise<GetTasksResponseDto> {
      return await this.taskRepository.getTasks(userId);
    }

    async updateTask(taskId: number, updateTaskRequestDto: UpdateTaskRequestDto): Promise<UpdateTaskResponseDto> {
      const userEntity: UserEntity = await this.userRepository.findOne({where: {id: updateTaskRequestDto.userId}});
      const taskEntity: TaskEntity = new TaskEntity();
      taskEntity.taskName = updateTaskRequestDto.taskName;
      taskEntity.date = new Date(updateTaskRequestDto.date);
      taskEntity.description = updateTaskRequestDto.description;
      taskEntity.userId = userEntity;

      return await this.taskRepository.updateTask(taskId, taskEntity);
    }

    async deleteTask(taskId: number): Promise<DeleteTaskResponseDto> {
      return await this.taskRepository.deleteTask(taskId);
    }
}
