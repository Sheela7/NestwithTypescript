import { User } from './users.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class UsersService {
  private users: User[] = [];
  insertUser(name: string, age: number, surname: string, email: string) {
    const id = uuidv4();
    const newUser = new User(id, name, age, surname, email);
    this.users.push(newUser);
    return id;
  }
}
