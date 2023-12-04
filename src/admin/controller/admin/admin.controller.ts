// admin.controller.ts
import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from 'src/admin/services/admin/admin.service';
import { RegisterAdminDto } from 'src/dtos/register-admin.dto';
import { Admin } from 'src/typeorm/entities/Admin';


@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  registerAdmin(@Body() registerAdminDto: RegisterAdminDto): Promise<Admin> {
    return this.adminService.create(registerAdminDto);
  }
}
