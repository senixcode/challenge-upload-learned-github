import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteModule } from './route/route.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
       autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type:'sqlite',
      database:'db.sqlite3',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize:true,
    }),
    RouteModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
