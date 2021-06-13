import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../data/user';
import ListData from '../data/ListData.json';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users: User[] = ListData;

  getAll(): User[] {
    return this.users;
  }
  getOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    return user;
  }
  create(userData: any) {
    this.users.push({
      id: this.users.length + 1,
      ...userData,
    });
  }
  deleteOne(userId: number) {
    this.getOne(userId);
    this.users = this.users.filter((item) => item.id !== userId);
    // const newFilter = profileRecoil.filter((id) => id.id !== item.id);
    return this.users;
  }
  update(id: number, updateData: any) {
    // const user = this.getOne(id);
    // this.deleteOne(id);
    // this.users.push({ ...user, ...updateData });
    const a = this.users.map((item) =>
      item.id === id
        ? {
            id: id,
            name: updateData.name,
            age: updateData.age,
            address: updateData.address,
            number: updateData.number,
          }
        : item,
    );
    console.log(a);
    // setProfileRecoil(
    //   profileRecoil.map((user: IInformation) =>
    //     user.id === info.id
    //       ? {
    //           id: text.id,
    //           name: text.name,
    //           age: text.age,
    //           address: text.address,
    //           number: text.number,
    //         }
    //       : user
    //   )
    // );
  }
}
