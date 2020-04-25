import { Injectable, Logger, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { User } from '../models/user.model';
import { CreateUserDto } from '../dto/create.user.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectModel('User') private userModel: Model<User>
  ) { }

  async singUp(createUserDto: CreateUserDto): Promise<User> {
    const isUserCreated = await this.userModel.findOne({
      user: createUserDto.user,
      password: createUserDto.password
    });

    if (isUserCreated) {
      throw new UnprocessableEntityException('User is already registered');
    }

    Logger.debug(createUserDto, 'UserService.singUp');

    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }

  async logIn(user: User): Promise<User> {
    const userRecord = await this.userModel.findOne({
      user: user.user,
      password: user.password
    });

    if (!userRecord) {
      throw new NotFoundException('user not found')
    }

    Logger.debug(userRecord, 'UserService.logIn');

    return userRecord;
  }
}
