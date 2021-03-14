import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createRouteInput } from './dto/create-route.input';
import { Route } from './route.entity';
import { RouteService } from './route.service';

@Resolver()
export class RouteResolver {
  constructor(private routeService: RouteService) {}
  @Query((returns) => Route)
  getRoute(@Args('id', { type: () => Int }) id: number): Promise<Route> {
    return this.routeService.findOne(id);
  }

  @Query((returns) => [Route])
  routes(): Promise<Route[]> {
    return this.routeService.findAll();
  }

  @Mutation((returns) => Route)
  createRoute(
    @Args('createRouteInput') createRouteInput: createRouteInput,
  ): Promise<Route> {
    return this.routeService.createRoute(createRouteInput);
  }
}
