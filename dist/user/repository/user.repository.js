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
exports.UserRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_ex_decorator_1 = require("../../typeorm-ex.decorator");
const typeorm_2 = require("typeorm");
const user_1 = require("../entity/user");
const add_user_res_dto_1 = require("../dto/add.user.res.dto");
const get_user_res_dto_1 = require("../dto/get.user.res.dto");
const update_user_res_dto_1 = require("../dto/update.user.res.dto");
const delete_user_res_dto_1 = require("../dto/delete.user.res.dto");
let UserRepository = class UserRepository extends typeorm_2.Repository {
    constructor(repository) {
        super(repository.target, repository.manager, repository.queryRunner);
        this.repository = repository;
    }
    async addUser(userName) {
        const response = new add_user_res_dto_1.AddUserResponseDto();
        response.result = false;
        response.code = '';
        response.message = '';
        try {
            const userEntity = new user_1.UserEntity();
            userEntity.userName = userName;
            const result = await this.save(userEntity);
            console.log(result);
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
    async getUser(userId) {
        const response = new get_user_res_dto_1.GetUserResponseDto();
        response.result = false;
        response.code = '';
        response.message = '';
        try {
            const result = await this.findOneBy({ id: userId });
            console.log(result);
            if (result) {
                response.result = true;
                response.data = result;
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
    async updateUser(userId, updateUserRequestDto) {
        const response = new update_user_res_dto_1.UpdateUserResponseDto();
        response.result = false;
        response.code = '';
        response.message = '';
        try {
            const userEntity = new user_1.UserEntity();
            userEntity.userName = updateUserRequestDto.userName;
            const result = await this.update({ id: userId }, userEntity);
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
    async deleteUser(userId) {
        const response = new delete_user_res_dto_1.DeleteUserResponseDto();
        response.result = false;
        response.code = '';
        response.message = '';
        try {
            const result = await this.delete({ id: userId });
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
UserRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(user_1.UserEntity),
    __param(0, (0, typeorm_1.InjectRepository)(user_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map