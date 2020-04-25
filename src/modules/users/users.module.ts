import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

@Module({
  controllers: [
    UserController
  ],
  imports: [],
  providers: [
    UserService
  ]
})
export class UsersModule {}
