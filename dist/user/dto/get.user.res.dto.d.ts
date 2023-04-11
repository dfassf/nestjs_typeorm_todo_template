import { UserEntity } from '../entity/user';
export declare class GetUserResponseDto {
    result: boolean;
    data: UserEntity;
    code: string;
    message: string;
}
