import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  @Get()
  async findAll(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }
  @Post()
  // async create(@Body() userData: UserEntity) {
  create(@Body() userData: any) {
    return this.userService.create(userData);
  }
  @Patch('/:id')
  // async patch(@Param('id') userId: number, @Body() updateData: UpdateUserDto) {
  async patch(@Param('id') userId: number, @Body() updateData: any) {
    return await this.userService.update(userId, updateData);
  }
  @Delete('/:id')
  remove(@Param('id') userId: number) {
    //Param으로 넘어 오기 때문에 string으로 되어있음.. 형변환 해야한다. transform:true
    return this.userService.deleteOne(userId);
  }

  // @Get()
  // getAll(): User[] {
  //   return this.userService.getAll();
  // }
  // @Post()
  // create(@Body() userData: any) {
  //   //any 부분은 dto를 정의하면서 채운다. //나중에 수정할것
  //   // create(@Body() userData: CreateUserDto) {
  //   return this.userService.create(userData);
  // }
  // @Delete('/:id')
  // remove(@Param('id') userId: number) {
  //   //Param으로 넘어 오기 때문에 string으로 되어있음.. 형변환 해야한다. transform:true
  //   return this.userService.deleteOne(userId);
  // }
  //put, patch : put은 전체 교체 patch는 부분 수정, patch는 변경하고자 하는 속성만 전달하면 됨.,.,.
  // @Patch('/:id')
  // patch(@Param('id') userId: number, @Body() updateData: any) {
  //   //patch(@Param('id') userId: number, @Body() updateData: UpdateUserDto){
  //   return this.userService.update(userId, updateData);
  // }
}
