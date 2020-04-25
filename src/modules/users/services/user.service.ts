import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  private users: User[] = [];

  singin(createUuser: User): User {
    const isUserCreated = this.users
      .find(user => user.user === createUuser.user && user.password === createUuser.password);

    if (isUserCreated) {
      return isUserCreated;
    }

    this.users.push(createUuser);

    return createUuser;
  }

  login(createUuser: User): User {
    const userRecord = this.users
      .find(user => user.user === createUuser.user && user.password === createUuser.password);

    Logger.debug(userRecord, 'Loggin service');

    if (!userRecord) {
      throw new NotFoundException('user not found')
    }

    return userRecord;
  }
}
