import { Module } from '@nestjs/common';
import { UserResolver } from './users.resolver';
import { UserService } from './users.service';

@Module({
  providers: [UserResolver, UserService],
})
export class UserModule {}
