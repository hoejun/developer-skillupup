import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

//update는 create와 동일하나 내부 값이 필수가 아니기 때문에 PartialType를 사용한다.
export class UpdateUserDto extends PartialType(CreateUserDto) {}
