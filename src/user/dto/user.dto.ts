import { TaskEntity } from 'src/task/entity/task';

export class UserDto {
  id: number;

  userName: string;

  createdAt: Date;
  
  updatedAt: Date;

  tasks: TaskEntity[];
}
