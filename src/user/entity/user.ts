import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { TaskEntity } from 'src/task/entity/task';

@Entity({name: 'user'})
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'user_name', type: 'varchar', length: 50, nullable: false, unique: true})
    userName: string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;
    
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @OneToMany(() => TaskEntity, taskEntity => taskEntity.userId)
    tasks: TaskEntity[];
}
