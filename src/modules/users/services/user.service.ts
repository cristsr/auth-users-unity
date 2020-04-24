import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { User } from '../models/user.model';
import { CreateUserDto } from '../dto/create.user.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectModel('User') private userModel: Model<User>
  ) { }

  async singin(createUserDto: CreateUserDto): Promise<User> {
    const isUserCreated = await this.userModel.findOne({
      user: createUserDto.user,
      password: createUserDto.password
    });

    if (isUserCreated) {
      return isUserCreated;
    }

    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }

  async login(user: User): Promise<User> {
    const userRecord = await this.userModel.findOne({
      user: user.user,
      password: user.password
    });

    Logger.debug(userRecord, 'Loggin service');

    if (!userRecord) {
      throw new NotFoundException('user not found')
    }

    return userRecord;
  }
}
