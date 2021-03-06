import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    this.userRepository = userRepository;
  }

  //전체 조회
  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
  //부분 조회
  findOne(id: number): Promise<UserEntity> {
    // const user = await this.userRepository.findOne(id);

    // if (!user) {
    //   throw new NotFoundException(`User with ID ${id} not found.`);
    // }

    return this.userRepository.findOne(id);
  }
  //생성
  // async create(userData: UserEntity): Promise<UserEntity[]> {
  async create(userData: any) {
    await this.userRepository.save(userData);

    return this.userRepository.find();
  }
  //수정
  async update(id: number, updateData: any) {
    const user = await this.findOne(id);

    // user.id = id;
    user.name = updateData.name;
    user.age = updateData.age;
    user.address = updateData.address;
    user.phone = updateData.phone;

    await this.userRepository.save(user);

    return this.userRepository.find();
  }
  //부분 삭제 async를 사용안하면 다음 이벤트때 발생한다.
  async deleteOne(userId: number): Promise<UserEntity[]> {
    await this.userRepository.delete(userId);

    return this.userRepository.find();
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
