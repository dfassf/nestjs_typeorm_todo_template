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
exports.TaskEntity = void 0;
const user_1 = require("../../user/entity/user");
const typeorm_1 = require("typeorm");
let TaskEntity = class TaskEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TaskEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.UserEntity, userEntity => userEntity.tasks),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_1.UserEntity)
], TaskEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'date', type: 'date', nullable: false }),
    __metadata("design:type", Date)
], TaskEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'task_name', type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], TaskEntity.prototype, "taskName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', type: 'text', nullable: true }),
    __metadata("design:type", String)
], TaskEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], TaskEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], TaskEntity.prototype, "updatedAt", void 0);
TaskEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'task' })
], TaskEntity);
exports.TaskEntity = TaskEntity;
//# sourceMappingURL=task.js.map