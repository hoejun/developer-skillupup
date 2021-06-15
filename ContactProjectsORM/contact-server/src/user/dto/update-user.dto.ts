import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ObjectType, Field, InputType, ID } from '@nestjs/graphql';

//update는 create와 동일하나 내부 값이 필수가 아니기 때문에 PartialType를 사용한다.
@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {}
