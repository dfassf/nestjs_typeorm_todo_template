import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserResponseDto } from './dto/create.user.res.dto';
import { GetUserResponseDto } from './dto/get.user.res.dto';
import { UpdateUserRequestDto } from './dto/update.user.req.dto';
import { UpdateUserResponseDto } from './dto/update.user.res.dto';
import { DeleteUserResponseDto } from './dto/delete.user.res.dto';
import { CreateUserRequestDto } from './dto/create.user.req.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('createUser')
  createUser(@Body() createUserRequestDto: CreateUserRequestDto): Promise<CreateUserResponseDto>{
    return this.userService.createUser(createUserRequestDto);
  }

  @Get('getUserById/:userId')
  getUserById(@Param('userId') userId: number): Promise<GetUserResponseDto>{
    return this.userService.getUserById(userId);
  }

  @Patch('updateUser/:userId')
  updateUser(
    @Param('userId') userId: number,
    @Body() updateUserRequestDto: UpdateUserRequestDto
    ): Promise<UpdateUserResponseDto>{
    return this.userService.updateUser(userId, updateUserRequestDto);
  }

  @Delete('deleteUser/:userId')
  deleteUser(@Param('userId') userId: number): Promise<DeleteUserResponseDto>{
    return this.userService.deleteUser(userId);
  }
}