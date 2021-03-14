import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Route } from "./route.entity";
import { RouteResolver } from "./route.resolver";
import { RouteService } from "./route.service";

@Module({
    imports: [TypeOrmModule.forFeature([Route])],
    providers: [RouteResolver, RouteService],
})
export class RouteModule {}