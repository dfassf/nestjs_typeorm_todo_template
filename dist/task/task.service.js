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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const task_repository_1 = require("./repository/task.repository");
const user_repository_1 = require("../user/repository/user.repository");
let TaskService = class TaskService {
    constructor(taskRepository, userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }
    async addTask(addTaskRequestDto) {
        const userEntity = await this.userRepository.findOne({ where: { id: addTaskRequestDto.userId } });
        return await this.taskRepository.addTask(userEntity, addTaskRequestDto);
    }
    async getTasks(userId) {
        return await this.taskRepository.getTasks(userId);
    }
    async updateTask(taskId, updateTaskRequestDto) {
        const userEntity = await this.userRepository.findOne({ where: { id: updateTaskRequestDto.userId } });
        return await this.taskRepository.updateTask(taskId, userEntity, updateTaskRequestDto);
    }
    async deleteTask(taskId) {
        return await this.taskRepository.deleteTask(taskId);
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [task_repository_1.TaskRepository,
        user_repository_1.UserRepository])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map