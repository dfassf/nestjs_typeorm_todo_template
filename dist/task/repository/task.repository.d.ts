import { Repository } from 'typeorm';
import { TaskEntity } from '../entity/task';
import { AddTaskRequestDto } from '../dto/add.task.req.dto';
import { AddTaskResponseDto } from '../dto/add.task.res.dto';
import { UserEntity } from 'src/user/entity/user';
import { GetTasksResponseDto } from '../dto/get.tasks.res.dto';
import { UpdateTaskRequestDto } from '../dto/update.task.req.dto';
import { UpdateTaskResponseDto } from '../dto/update.task.res.dto';
import { DeleteTaskResponseDto } from '../dto/delete.task.res.dto';
export declare class TaskRepository extends Repository<TaskEntity> {
    private readonly repository;
    constructor(repository: Repository<TaskEntity>);
    addTask(userEntity: UserEntity, addTaskRequestDto: AddTaskRequestDto): Promise<AddTaskResponseDto>;
    getTasks(userId: number): Promise<GetTasksResponseDto>;
    updateTask(taskId: number, userEntity: UserEntity, updateTaskRequestDto: UpdateTaskRequestDto): Promise<UpdateTaskResponseDto>;
    deleteTask(taskId: number): Promise<DeleteTaskResponseDto>;
}
