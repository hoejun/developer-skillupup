import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { User } from '../data/user';
import listData from '../data/listData.json';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    //전체 조회
    return this.userRepository.find();
  }
  findOne(id: number): Promise<UserEntity> {
    //부분 조회
    const user = this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }

    return user;
  }
  async create(userData: UserEntity): Promise<void> {
    //생성
    await this.userRepository.save(userData);
  }
  async update(id: number, updateData: UserEntity) {
    //수정
    const user = await this.userRepository.findOne(id);

    user.id = id;
    user.name = updateData.name;
    user.age = updateData.age;
    user.address = updateData.address;
    user.number = updateData.number;

    return this.userRepository.save(user);
  }
  async deleteOne(userId: number): Promise<void> {
    //부분 삭제
    await this.userRepository.delete(userId);
  }

  // private users: User[] = listData;

  // getAll(): User[] {
  //   return this.users;
  // }
  // getOne(id: number) {
  //   const user = this.users.find((item) => item.id === id);
  //   if (!user) {
  //     throw new NotFoundException(`User with ID ${id} not found.`);
  //   }
  //   return user;
  // }
  // create(userData: any) {
  //   this.users.push({
  //     id: this.users.length + 1,
  //     ...userData,
  //   });
  // }
  // deleteOne(userId: number) {
  //   this.getOne(userId);
  //   this.users = this.users.filter((item) => item.id !== userId);
  //   // const newFilter = profileRecoil.filter((id) => id.id !== item.id);
  //   return this.users;
  // }
  // update(id: number, updateData: any) {
  //   // const user = this.getOne(id);
  //   // this.deleteOne(id);
  //   // this.users.push({ ...user, ...updateData });
  //   const a = this.users.map((item) =>
  //     item.id === id
  //       ? {
  //           id: id,
  //           name: updateData.name,
  //           age: updateData.age,
  //           address: updateData.address,
  //           number: updateData.number,
  //         }
  //       : item,
  //   );
  // }
}
