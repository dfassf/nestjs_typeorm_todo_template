import { TaskService } from './task.service';
import { UserService } from 'src/user/user.service';
import { AddTaskRequestDto } from './dto/add.task.req.dto';
import { GetTasksResponseDto } from './dto/get.tasks.res.dto';
import { AddTaskResponseDto } from './dto/add.task.res.dto';
import { UpdateTaskRequestDto } from './dto/update.task.req.dto';
import { UpdateTaskResponseDto } from './dto/update.task.res.dto';
import { DeleteTaskResponseDto } from './dto/delete.task.res.dto';
export declare class TaskController {
    private readonly taskService;
    private readonly userServie;
    constructor(taskService: TaskService, userServie: UserService);
    addTask(addTaskRequestDto: AddTaskRequestDto): Promise<AddTaskResponseDto>;
    getTasks(userId: number): Promise<GetTasksResponseDto>;
    updateTask(taskId: number, updateTaskRequestDto: UpdateTaskRequestDto): Promise<UpdateTaskResponseDto>;
    deleteTask(taskId: number): Promise<DeleteTaskResponseDto>;
}
