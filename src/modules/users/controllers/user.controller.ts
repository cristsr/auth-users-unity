import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create.user.dto';
import { User } from '../models/user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/singin')
  singin(@Body() createUserDto: User): User {
    return this.userService.singin(createUserDto);
  }

  @Post('/login')
  login(@Body() user: User): User {
    return this.userService.login(user)
  }
  
}
