import { InjectRepository } from '@nestjs/typeorm';
import { CustomRepository } from 'src/typeorm-ex.decorator';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from '../entity/user';
import { AddUserResponseDto } from '../dto/add.user.res.dto';
import { GetUserResponseDto } from '../dto/get.user.res.dto';
import { UpdateUserRequestDto } from '../dto/update.user.req.dto';
import { UpdateUserResponseDto } from '../dto/update.user.res.dto';
import { DeleteUserResponseDto } from '../dto/delete.user.res.dto';

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>
  ) {
      super(repository.target, repository.manager, repository.queryRunner);
  }

  async addUser(userName: string): Promise<AddUserResponseDto> {
    const response = new AddUserResponseDto();
    response.result = false;
    response.code = '';
    response.message = '';
    try {
      const userEntity: UserEntity = new UserEntity();
      userEntity.userName = userName;

      const result: UserEntity = await this.save(userEntity);
      console.log(result)
      if(result) {
        response.result = true;
        return response;
      } else {
        return response;
      }

    } catch(e: any) {
      console.log(e);
      if(e.code && e.sqlMessage) {
        response.code = e.code;
        response.message = e.sqlMessage;
      }       
      return response;
    }
  }

  async getUser(userId: number): Promise<GetUserResponseDto> {
    const response = new GetUserResponseDto();
    response.result = false;
    response.code = '';
    response.message = '';
    try {
      const result: UserEntity = await this.findOneBy({id: userId});

      console.log(result)
      if(result) {
        response.result = true;
        response.data = result;
        return response;
      } else {
        return response;
      }

    } catch(e: any) {
      console.log(e);
      if(e.code && e.sqlMessage) {
        response.code = e.code;
        response.message = e.sqlMessage;
      }       
      return response;
    }
  }

  async updateUser(userId: number, updateUserRequestDto: UpdateUserRequestDto): Promise<UpdateUserResponseDto> {
    const response = new UpdateUserResponseDto();
    response.result = false;
    response.code = '';
    response.message = '';
    try {
      const userEntity: UserEntity = new UserEntity();
      userEntity.userName = updateUserRequestDto.userName;

      const result: UpdateResult = await this.update({id: userId}, userEntity);

      if(result) {
        response.result = true;
        return response;
      } else {
        return response;
      }

    } catch(e: any) {
      console.log(e);
      if(e.code && e.sqlMessage) {
        response.code = e.code;
        response.message = e.sqlMessage;
      }       
      return response;
    }
  }

  async deleteUser(userId: number): Promise<DeleteUserResponseDto> {
    const response = new DeleteUserResponseDto();
    response.result = false;
    response.code = '';
    response.message = '';
    try {
      const result: DeleteResult = await this.delete({id: userId});

      if(result) {
        response.result = true;
        return response;
      } else {
        return response;
      }

    } catch(e: any) {
      console.log(e);
      if(e.code && e.sqlMessage) {
        response.code = e.code;
        response.message = e.sqlMessage;
      }       
      return response;
    }
  }

}