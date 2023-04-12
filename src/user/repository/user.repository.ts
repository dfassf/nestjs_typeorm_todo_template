import { InjectRepository } from '@nestjs/typeorm';
import { CustomRepository } from 'src/typeorm-ex.decorator';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from '../entity/user';
import { CreateUserResponseDto } from '../dto/create.user.res.dto';
import { GetUserResponseDto } from '../dto/get.user.res.dto';
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

  async createUser(userEntity: UserEntity): Promise<CreateUserResponseDto> {
    const response = new CreateUserResponseDto();
    response.result = false;
    response.code = '';
    response.message = '';
    try {
      const result:InsertResult = 
      await this.createQueryBuilder('u')
      .insert()
      .into(UserEntity)
      .values(userEntity)
      .execute();

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

  async getUserById(userId: number): Promise<GetUserResponseDto> {
    const response = new GetUserResponseDto();
    response.result = false;
    response.code = '';
    response.message = '';
    try {
      const result:UserEntity = 
      await this.createQueryBuilder()
      .where('id = :userId', {userId})
      .getOne();

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

  async updateUser(userId: number, userEntity: UserEntity): Promise<UpdateUserResponseDto> {
    const response = new UpdateUserResponseDto();
    response.result = false;
    response.code = '';
    response.message = '';
    try {
      const result: UpdateResult = 
      await this.createQueryBuilder()
      .update(UserEntity)
      .set(userEntity)
      .where('id = :userId', {userId})
      .execute();

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
      const result: DeleteResult = 
      await this.createQueryBuilder()
      .delete()
      .from(UserEntity)
      .where('id = :userId', {userId})
      .execute();

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