import { CustomRepository } from 'src/typeorm-ex.decorator';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { TaskEntity } from '../entity/task';
import { AddTaskResponseDto } from '../dto/add.task.res.dto';
import { GetTasksResponseDto } from '../dto/get.tasks.res.dto';
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

  async addTask(taskEntity: TaskEntity): Promise<AddTaskResponseDto> {
    const response = new AddTaskResponseDto();
    try {
      const result: InsertResult = 
      await this.createQueryBuilder()
      .insert()
      .into(TaskEntity)
      .values(taskEntity)
      .execute();
      console.log(result)
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
      const result: TaskEntity[] = 
      await this.createQueryBuilder()
      .where('user_id = :userId', {userId})
      .getMany();

      if(result) {
        response.result = true;
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

  async updateTask(taskId: number, taskEntity: TaskEntity): Promise<UpdateTaskResponseDto> {
    const response = new UpdateTaskResponseDto();
    try {
      const result: UpdateResult = 
      await this.createQueryBuilder()
      .update(TaskEntity)
      .set(taskEntity)
      .where('id = :taskId', {taskId})
      .execute();

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
      const result: DeleteResult = 
      await this.createQueryBuilder()
      .delete()
      .where('id= :taskId', {taskId})
      .execute();

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