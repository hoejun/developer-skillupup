import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ObjectType, Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  //타입 유효성 검사
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  address: string;

  @IsString()
  phone: string;

  //배열이면 each true, 옵션값이면 IsOptional 사용
  // @IsOptional()
  // @IsString({ each: true })
  // readonly address: string[];
}
