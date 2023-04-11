import { CustomRepository } from 'src/typeorm-ex.decorator';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TaskEntity } from '../entity/task';
import { AddTaskRequestDto } from '../dto/add.task.req.dto';
import { AddTaskResponseDto } from '../dto/add.task.res.dto';
import { UserEntity } from 'src/user/entity/user';
import { GetTasksResponseDto } from '../dto/get.tasks.res.dto';
import { UpdateTaskRequestDto } from '../dto/update.task.req.dto';
import { UpdateTaskResponseDto } from '../dto/update.task.res.dto';
import { DeleteTaskResponseDto } from '../dto/delete.task.res.dto';

@CustomRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity>{
  constructor(
    @InjectRepository(TaskEntity)
    private readonly repository: Repository<TaskEntity>
  ) {
      super(repository.target, repository.manager, repository.queryRunner);
  }

  async addTask(userEntity: UserEntity, addTaskRequestDto: AddTaskRequestDto): Promise<AddTaskResponseDto> {
    const response = new AddTaskResponseDto();
    try {
      const taskEntity: TaskEntity = new TaskEntity();

      taskEntity.userId = userEntity;
      taskEntity.taskName = addTaskRequestDto.taskName;
      taskEntity.date = new Date(addTaskRequestDto.date);
      if(addTaskRequestDto.description) {
        taskEntity.description = addTaskRequestDto.description;
      }

      const result: TaskEntity = await this.save(taskEntity);
      if(result) {
        response.result = true;
        return response;
      } else {
        return response;
      }

    } catch(e: any) {
      console.log(e);
      if(e.code && e.sqlMessage) {
        response.code = e.code;
        response.message = e.sqlMessage;
      }       
      return response;
    }
  }

  async getTasks(userId: number): Promise<GetTasksResponseDto> {
    let response: GetTasksResponseDto = new GetTasksResponseDto();
    response.result = false;
    response.data = [];
    response.code = '';
    response.message = '';
    try {

      const result: TaskEntity[] = await this.find({where: {userId: {id: userId}}});
      console.log(result)
      if(result) {
        response.data = result;
        return response;
      }

    } catch(e: any) {
      console.log(e);
      if(e.code && e.sqlMessage) {
        response.code = e.code;
        response.message = e.sqlMessage;
      }       
      return response;
    }
  }

  async updateTask(taskId: number, userEntity: UserEntity, updateTaskRequestDto: UpdateTaskRequestDto): Promise<UpdateTaskResponseDto> {
    const response = new UpdateTaskResponseDto();
    try {
      const taskEntity: TaskEntity = new TaskEntity();
      taskEntity.taskName = updateTaskRequestDto.taskName;
      taskEntity.date = new Date(updateTaskRequestDto.date);
      taskEntity.description = updateTaskRequestDto.description;

      const result: UpdateResult = await this.update({id: taskId}, taskEntity);


      if(result) {
        response.result = true;
        return response;
      } else {
        return response;
      }

    } catch(e: any) {
      console.log(e);
      if(e.code && e.sqlMessage) {
        response.code = e.code;
        response.message = e.sqlMessage;
      }       
      return response;
    }
  }

  async deleteTask(taskId: number): Promise<DeleteTaskResponseDto> {
    const response = new DeleteTaskResponseDto();
    try {
      const result: DeleteResult = await this.delete({id: taskId});

      if(result) {
        response.result = true;
        return response;
      } else {
        return response;
      }

    } catch(e: any) {
      console.log(e);
      if(e.code && e.sqlMessage) {
        response.code = e.code;
        response.message = e.sqlMessage;
      }       
      return response;
    }
  }

}