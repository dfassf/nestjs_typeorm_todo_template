import { UserRepository } from './repository/user.repository';
import { TaskRepository } from 'src/task/repository/task.repository';
import { AddUserResponseDto } from './dto/add.user.res.dto';
import { GetUserResponseDto } from './dto/get.user.res.dto';
import { UpdateUserRequestDto } from './dto/update.user.req.dto';
import { UpdateUserResponseDto } from './dto/update.user.res.dto';
import { DeleteUserResponseDto } from './dto/delete.user.res.dto';
export declare class UserService {
    private userRepository;
    private taskRepository;
    constructor(userRepository: UserRepository, taskRepository: TaskRepository);
    addUser(userName: string): Promise<AddUserResponseDto>;
    getUser(userId: number): Promise<GetUserResponseDto>;
    updateUser(userId: number, updateUserRequestDto: UpdateUserRequestDto): Promise<UpdateUserResponseDto>;
    deleteUser(userId: number): Promise<DeleteUserResponseDto>;
}
