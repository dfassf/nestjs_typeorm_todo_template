import { Injectable } from '@nestjs/common'
import { UserRepository } from './repository/user.repository'
import { UserEntity } from './entity/user';
import { CreateUserResponseDto } from './dto/create.user.res.dto';
import { GetUserResponseDto } from './dto/get.user.res.dto';
import { UpdateUserRequestDto } from './dto/update.user.req.dto';
import { UpdateUserResponseDto } from './dto/update.user.res.dto';
import { DeleteUserResponseDto } from './dto/delete.user.res.dto';
import { CreateUserRequestDto } from './dto/create.user.req.dto';
import { TaskRepository } from 'src/task/repository/task.repository';
import { GetTasksResponseDto } from 'src/task/dto/get.tasks.res.dto';


@Injectable()
export class UserService {
	constructor(
		private userRepository: UserRepository,
		private taskRepository: TaskRepository,
	) {}

	async createUser(createUserRequestDto: CreateUserRequestDto): Promise<CreateUserResponseDto> {
		const userEntity: UserEntity = new UserEntity();
		userEntity.userName = createUserRequestDto.userName;

		return await this.userRepository.createUser(userEntity);
	}

	async getUserById(userId: number): Promise<GetUserResponseDto> {
		const response = new GetUserResponseDto();
		response.result = false;
		response.code = '';
		response.message = '';
		response.data = {
			id: null,
			userName: '',
			createdAt: null,
			updatedAt: null,
			tasks: [],
		};
		try {
			const user: GetUserResponseDto = await this.userRepository.getUserById(userId);
			const tasks: GetTasksResponseDto = await this.taskRepository.getTasks(userId);
			response.result = true;
			response.data.id = user.data.id;
			console.log(response.data,'here?')
			response.data.userName = user.data.userName;
			response.data.tasks = tasks.data;
			response.data.createdAt = user.data.createdAt;
			response.data.updatedAt = user.data.updatedAt;
			return response;
		} catch(e) {
			if(e.code && e.sqlMessage) {
				response.code = e.code;
				response.message = e.sqlMessage;
			}       
			return response;
		}
	}

	async updateUser(userId: number, updateUserRequestDto: UpdateUserRequestDto): Promise<UpdateUserResponseDto> {
		const userEntity: UserEntity = new UserEntity();
		userEntity.userName = updateUserRequestDto.userName;

		return await this.userRepository.updateUser(userId, userEntity);
	}

	async deleteUser(userId: number): Promise<DeleteUserResponseDto> {
		return await this.userRepository.deleteUser(userId);
	}
}
