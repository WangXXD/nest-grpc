import { Controller, OnModuleInit, Get } from "@nestjs/common";
import { GrpcMethod, Client, ClientGrpc } from "@nestjs/microservices";
import { grpcClientOptions } from "../grpc-client.options";
import { Observable } from "rxjs";

interface HeroById {
  id: number;
}
interface Hero {
  id: number;
  name: string;
}

interface HeroService {
  findOne(data: { id: number }): Observable<Hero>;
}

@Controller()
export class HeroController implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc

  private heroService: HeroService;
  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService');
  }

  @Get()
  execute(): Observable<Hero> {
    return this.heroService.findOne({ id: 1 })
  }

  @GrpcMethod('HeroService')
  findOne(data: HeroById, metadata: any): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}