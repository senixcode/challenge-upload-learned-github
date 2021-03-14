import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createRouteInput } from './dto/create-route.input';
import { Route } from './route.entity';

@Injectable()
export class RouteService {
  constructor(
    @InjectRepository(Route) private routesRepository: Repository<Route>,
  ) {}
 
  createRoute(createRouteInput: createRouteInput): Promise<Route> {
    const newRoute = this.routesRepository.create(createRouteInput);
    return this.routesRepository.save(newRoute);
  }

  async findAll(): Promise<Route[]> {
    return this.routesRepository.find();
  }

  findOne(id: number): Promise<Route> {
    return this.routesRepository.findOneOrFail(id);
  }
}
