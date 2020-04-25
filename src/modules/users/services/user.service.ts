import { Injectable, Logger, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  private users: User[] = [];

  singin(createUser: User): User {
    const isUserCreated = this.users
      .find(user => user.user === createUser.user && user.password === createUser.password);

    if (!isUserCreated) {
      this.users.push(createUser);
      return createUser;
    }

    throw new UnprocessableEntityException('User has been registered')
  }

  login(createUser: User): User {
    const userRecord = this.users
      .find(user => user.user === createUser.user && user.password === createUser.password);

    Logger.debug(userRecord, 'Loggin service');

    if (!userRecord) {
      throw new NotFoundException('user not found')
    }

    return userRecord;
  }
}
