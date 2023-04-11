"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const user_repository_1 = require("./repository/user.repository");
const user_1 = require("./entity/user");
const task_module_1 = require("../task/task.module");
const task_service_1 = require("../task/task.service");
const task_repository_1 = require("../task/repository/task.repository");
const task_1 = require("../task/entity/task");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_1.UserEntity,
                task_1.TaskEntity,
            ])
        ],
        controllers: [user_controller_1.UserController],
        providers: [
            user_service_1.UserService,
            user_repository_1.UserRepository,
            task_module_1.TaskModule,
            task_service_1.TaskService,
            task_repository_1.TaskRepository,
        ],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map