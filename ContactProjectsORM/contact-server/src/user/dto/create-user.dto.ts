import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  //타입 유효성 검사
  @IsNotEmpty()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  address: string;

  @IsString()
  number: string;

  //배열이면 each true, 옵션값이면 IsOptional 사용
  // @IsOptional()
  // @IsString({ each: true })
  // readonly address: string[];
}
