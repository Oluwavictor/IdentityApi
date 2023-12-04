import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AdminModule } from 'src/admin/admin.module';
import { AuthService } from './services/auth/auth.service';
import { AuthController } from './controller/auth/auth.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [
        AdminModule,
        // UsersModule,
        JwtModule.register({
          secret: 'YOUR_JWT_SECRET',
          signOptions: { expiresIn: '1h' },
        }),
      ],
      providers: [AuthService, JwtService],
      controllers: [AuthController],
      exports: [AuthService]
})
export class AuthModule {}
