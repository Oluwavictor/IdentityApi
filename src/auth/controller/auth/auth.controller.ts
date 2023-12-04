import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { RegisterAdminDto } from 'src/dtos/register-admin.dto';
import { Admin } from 'src/typeorm/entities/Admin';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register-admin')
  @UsePipes(new ValidationPipe())
  registerAdmin(@Body() registerAdminDto: RegisterAdminDto): Promise<Admin> {
    return this.authService.registerAdmin(registerAdminDto);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body() admin: Admin): Promise<{ accessToken: string }> {
    return this.authService.login(admin);
  }
}
