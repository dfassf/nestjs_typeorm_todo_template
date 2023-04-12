import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule} from '@nestjs/config';
import { Middleware } from './middleware/middleware';
import { UserController } from './user/user.controller';
import { TaskEntity } from './task/entity/task';
import { UserEntity } from './user/entity/user';
import { TaskModule } from './task/task.module';
import { TaskController } from './task/task.controller';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV || '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT!),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [
        UserEntity,
        TaskEntity,
      ],
      synchronize: true,
    }),
    UserModule,
    TaskModule
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Middleware)
      .forRoutes(
        UserController,
        TaskController
      );
  }
}

