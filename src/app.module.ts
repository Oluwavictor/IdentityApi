import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { Admin } from './typeorm/entities/Admin';
import { UserComplaint } from './typeorm/entities/User-Complaint';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root',
      password: '',
      database: 'identity_db',
      entities: [User, Admin, UserComplaint ],
      synchronize: true,
    }),
    UsersModule,
    AdminModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
