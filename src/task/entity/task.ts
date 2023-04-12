import { UserEntity } from 'src/user/entity/user';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'

@Entity({name: 'task'})
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, userEntity => userEntity.tasks)
  @JoinColumn({name: 'user_id'})
  userId: UserEntity;

  @Column({ name: 'date', type: 'date', nullable: false })
  date: Date;

  @Column({ name: 'task_name', type: 'varchar', length: 100, nullable: false})
  taskName: string;

  @Column({ name: 'description', type: 'text', nullable: true})
  description: string;

  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;
  
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
