import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserInfoModule } from './user-info/user-info.module';

@Module({
  imports: [UserModule, UserInfoModule],
  exports: [UserModule, UserInfoModule], //가져온 모듈을 다른 모듈에서 사용할 수 있게 내보낼수 있다.
})
export class AppModule {}
