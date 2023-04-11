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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
const user_service_1 = require("../user/user.service");
const add_task_req_dto_1 = require("./dto/add.task.req.dto");
const update_task_req_dto_1 = require("./dto/update.task.req.dto");
let TaskController = class TaskController {
    constructor(taskService, userServie) {
        this.taskService = taskService;
        this.userServie = userServie;
    }
    async addTask(addTaskRequestDto) {
        return this.taskService.addTask(addTaskRequestDto);
    }
    async getTasks(userId) {
        return this.taskService.getTasks(userId);
    }
    async updateTask(taskId, updateTaskRequestDto) {
        return this.taskService.updateTask(taskId, updateTaskRequestDto);
    }
    async deleteTask(taskId) {
        return this.taskService.deleteTask(taskId);
    }
};
__decorate([
    (0, common_1.Post)('addTask'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_task_req_dto_1.AddTaskRequestDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "addTask", null);
__decorate([
    (0, common_1.Get)('getTasks/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Patch)('updateTask/:taskId'),
    __param(0, (0, common_1.Param)('taskId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_task_req_dto_1.UpdateTaskRequestDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)('deleteTask/:taskId'),
    __param(0, (0, common_1.Param)('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTask", null);
TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        user_service_1.UserService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map