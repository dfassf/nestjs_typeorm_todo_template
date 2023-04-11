import { TaskEntity } from 'src/task/entity/task';
export declare class UserEntity {
    id: number;
    userName: string;
    createdAt: Date;
    updatedAt: Date;
    tasks: TaskEntity[];
}
