import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
  } from '@nestjs/common';
import { TaskService } from './task.service';
import { AddTaskRequestDto } from './dto/add.task.req.dto';
import { GetTasksResponseDto } from './dto/get.tasks.res.dto';
import { AddTaskResponseDto } from './dto/add.task.res.dto';
import { UpdateTaskRequestDto } from './dto/update.task.req.dto';
import { UpdateTaskResponseDto } from './dto/update.task.res.dto';
import { DeleteTaskResponseDto } from './dto/delete.task.res.dto';

@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    ) {}

  @Post('addTask')
  async addTask(@Body() addTaskRequestDto: AddTaskRequestDto): Promise<AddTaskResponseDto> {
    return this.taskService.addTask(addTaskRequestDto);
  }

  @Get('getTasks/:userId')
  async getTasks(@Param('userId', ParseIntPipe) userId: number): Promise<GetTasksResponseDto> {
    return this.taskService.getTasks(userId);
  }

  @Patch('updateTask/:taskId')
  async updateTask(
    @Param('taskId') taskId: number,
    @Body() updateTaskRequestDto: UpdateTaskRequestDto
    ): Promise<UpdateTaskResponseDto> {
    return this.taskService.updateTask(taskId, updateTaskRequestDto);
  }

  @Delete('deleteTask/:taskId')
  async deleteTask(@Param('taskId') taskId: number): Promise<DeleteTaskResponseDto> {
    return this.taskService.deleteTask(taskId);
  }
}