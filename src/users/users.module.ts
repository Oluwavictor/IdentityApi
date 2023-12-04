import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { AdminService } from 'src/admin/services/admin/admin.service';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UserComplaint } from 'src/typeorm/entities/User-Complaint';
import { AdminModule } from 'src/admin/admin.module';
import { AuthModule } from 'src/auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserComplaint]),
    AdminModule, AuthModule
  ],
  controllers: [UsersController],
  providers: [AdminService, UsersService, AuthService, JwtService],
  exports: [UsersService],
})
export class UsersModule {}
