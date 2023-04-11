"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const typeorm_ex_decorator_1 = require("../../typeorm-ex.decorator");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_1 = require("../entity/task");
const add_task_res_dto_1 = require("../dto/add.task.res.dto");
const get_tasks_res_dto_1 = require("../dto/get.tasks.res.dto");
const update_task_res_dto_1 = require("../dto/update.task.res.dto");
const delete_task_res_dto_1 = require("../dto/delete.task.res.dto");
let TaskRepository = class TaskRepository extends typeorm_2.Repository {
    constructor(repository) {
        super(repository.target, repository.manager, repository.queryRunner);
        this.repository = repository;
    }
    async addTask(userEntity, addTaskRequestDto) {
        const response = new add_task_res_dto_1.AddTaskResponseDto();
        try {
            const taskEntity = new task_1.TaskEntity();
            taskEntity.userId = userEntity;
            taskEntity.taskName = addTaskRequestDto.taskName;
            taskEntity.date = new Date(addTaskRequestDto.date);
            if (addTaskRequestDto.description) {
                taskEntity.description = addTaskRequestDto.description;
            }
            const result = await this.save(taskEntity);
            if (result) {
                response.result = true;
                return response;
            }
            else {
                return response;
            }
        }
        catch (e) {
            console.log(e);
            if (e.code && e.sqlMessage) {
                response.code = e.code;
                response.message = e.sqlMessage;
            }
            return response;
        }
    }
    async getTasks(userId) {
        let response = new get_tasks_res_dto_1.GetTasksResponseDto();
        response.result = false;
        response.data = [];
        response.code = '';
        response.message = '';
        try {
            const result = await this.find({ where: { userId: { id: userId } } });
            console.log(result);
            if (result) {
                response.data = result;
                return response;
            }
        }
        catch (e) {
            console.log(e);
            if (e.code && e.sqlMessage) {
                response.code = e.code;
                response.message = e.sqlMessage;
            }
            return response;
        }
    }
    async updateTask(taskId, userEntity, updateTaskRequestDto) {
        const response = new update_task_res_dto_1.UpdateTaskResponseDto();
        try {
            const taskEntity = new task_1.TaskEntity();
            taskEntity.taskName = updateTaskRequestDto.taskName;
            taskEntity.date = new Date(updateTaskRequestDto.date);
            taskEntity.description = updateTaskRequestDto.description;
            const result = await this.update({ id: taskId }, taskEntity);
            if (result) {
                response.result = true;
                return response;
            }
            else {
                return response;
            }
        }
        catch (e) {
            console.log(e);
            if (e.code && e.sqlMessage) {
                response.code = e.code;
                response.message = e.sqlMessage;
            }
            return response;
        }
    }
    async deleteTask(taskId) {
        const response = new delete_task_res_dto_1.DeleteTaskResponseDto();
        try {
            const result = await this.delete({ id: taskId });
            if (result) {
                response.result = true;
                return response;
            }
            else {
                return response;
            }
        }
        catch (e) {
            console.log(e);
            if (e.code && e.sqlMessage) {
                response.code = e.code;
                response.message = e.sqlMessage;
            }
            return response;
        }
    }
};
TaskRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(task_1.TaskEntity),
    __param(0, (0, typeorm_1.InjectRepository)(task_1.TaskEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TaskRepository);
exports.TaskRepository = TaskRepository;
//# sourceMappingURL=task.repository.js.map