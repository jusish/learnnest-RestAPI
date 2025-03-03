import { Module } from '@nestjs/common';
import { AuthContoller } from './auth.contoller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthContoller],
  providers: [AuthService],
})
export class AuthModule {}
