import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/typeorm/entities/Admin';
import { AdminService } from './services/admin/admin.service';
import { AdminController } from './controller/admin/admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminService],
  controllers: [AdminController],
  exports: [AdminService, TypeOrmModule],
})
export class AdminModule {}
