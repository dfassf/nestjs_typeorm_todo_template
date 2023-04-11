import { UserService } from './user.service';
import { AddUserResponseDto } from './dto/add.user.res.dto';
import { GetUserResponseDto } from './dto/get.user.res.dto';
import { UpdateUserRequestDto } from './dto/update.user.req.dto';
import { UpdateUserResponseDto } from './dto/update.user.res.dto';
import { DeleteUserResponseDto } from './dto/delete.user.res.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    addUser(userName: string): Promise<AddUserResponseDto>;
    getUser(userId: number): Promise<GetUserResponseDto>;
    updateUser(userId: number, updateUserRequestDto: UpdateUserRequestDto): Promise<UpdateUserResponseDto>;
    deleteUser(userId: number): Promise<DeleteUserResponseDto>;
}
