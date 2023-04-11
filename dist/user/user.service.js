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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./repository/user.repository");
const task_repository_1 = require("../task/repository/task.repository");
let UserService = class UserService {
    constructor(userRepository, taskRepository) {
        this.userRepository = userRepository;
        this.taskRepository = taskRepository;
    }
    async addUser(userName) {
        return await this.userRepository.addUser(userName);
    }
    async getUser(userId) {
        return await this.userRepository.getUser(userId);
    }
    async updateUser(userId, updateUserRequestDto) {
        return await this.userRepository.updateUser(userId, updateUserRequestDto);
    }
    async deleteUser(userId) {
        return await this.userRepository.deleteUser(userId);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        task_repository_1.TaskRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map