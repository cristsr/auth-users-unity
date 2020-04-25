import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create.user.dto';
import { User } from '../models/user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/singup')
  singUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.singUp(createUserDto);
  }

  @Post('/login')
  logIn(@Body() user: User): Promise<User> {
    return this.userService.logIn(user)
  }
  
}
