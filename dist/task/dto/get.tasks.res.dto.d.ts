import { TaskEntity } from '../entity/task';
export declare class GetTasksResponseDto {
    result: boolean;
    data: TaskEntity[];
    code: string;
    message: string;
}
