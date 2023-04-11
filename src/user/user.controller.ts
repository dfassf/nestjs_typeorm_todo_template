import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AddUserResponseDto } from './dto/add.user.res.dto';
import { UserEntity } from './entity/user';
import { GetUserResponseDto } from './dto/get.user.res.dto';
import { UpdateUserRequestDto } from './dto/update.user.req.dto';
import { UpdateUserResponseDto } from './dto/update.user.res.dto';
import { DeleteUserResponseDto } from './dto/delete.user.res.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('addUser')
  addUser(@Query('userName') userName: string): Promise<AddUserResponseDto>{
    return this.userService.addUser(userName);
  }

  @Get('getUser/:userId')
  getUser(@Param('userId') userId: number): Promise<GetUserResponseDto>{
    return this.userService.getUser(userId);
  }

  @Patch('updateUser/:userId')
  updateUser(
    @Param('userId') userId: number,
    @Body() updateUserRequestDto: UpdateUserRequestDto
    ): Promise<UpdateUserResponseDto>{
      console.log(updateUserRequestDto)
    return this.userService.updateUser(userId, updateUserRequestDto);
  }

  @Delete('deleteUser/:userId')
  deleteUser(@Param('userId') userId: number): Promise<DeleteUserResponseDto>{
    return this.userService.deleteUser(userId);
  }
}