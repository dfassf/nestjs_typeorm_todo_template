import { Injectable } from '@nestjs/common'
import { UserRepository } from './repository/user.repository'
import { TaskRepository } from 'src/task/repository/task.repository';
import { UserEntity } from './entity/user';
import { AddUserResponseDto } from './dto/add.user.res.dto';
import { GetUserResponseDto } from './dto/get.user.res.dto';
import { UpdateUserRequestDto } from './dto/update.user.req.dto';
import { UpdateUserResponseDto } from './dto/update.user.res.dto';
import { DeleteUserResponseDto } from './dto/delete.user.res.dto';


@Injectable()
export class UserService {
    constructor(
        private userRepository: UserRepository,
        private taskRepository: TaskRepository
      ) {}

    async addUser(userName: string): Promise<AddUserResponseDto> {
        return await this.userRepository.addUser(userName);
    }

    async getUser(userId: number): Promise<GetUserResponseDto> {
        return await this.userRepository.getUser(userId);
    }

    async updateUser(userId: number, updateUserRequestDto: UpdateUserRequestDto): Promise<UpdateUserResponseDto> {
        return await this.userRepository.updateUser(userId, updateUserRequestDto);
    }

    async deleteUser(userId: number): Promise<DeleteUserResponseDto> {
        return await this.userRepository.deleteUser(userId);
    }


}
