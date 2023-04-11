import { UserEntity } from 'src/user/entity/user';
export declare class TaskEntity {
    id: number;
    userId: UserEntity;
    date: Date;
    taskName: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
