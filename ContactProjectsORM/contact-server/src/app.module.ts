import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserInfoModule } from './user-info/user-info.module';

@Module({
  //forRoot()에 DB접근 정보를 파라미터를 주지 않으면 root경로의 ormconfig.json의 파일에서 설정 값을 자동으로 찾아 사용한다.
  imports: [TypeOrmModule.forRoot(), UserModule, UserInfoModule],
  exports: [UserModule, UserInfoModule], //가져온 모듈을 다른 모듈에서 사용할 수 있게 내보낼수 있다.
})
export class AppModule {}
