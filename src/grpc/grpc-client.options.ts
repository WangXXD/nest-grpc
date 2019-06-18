import { ClientOptions, Transport } from "@nestjs/microservices";
import { resolve } from "path";

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50051',
    package: 'hero',
    protoPath: resolve('proto/index.proto'),
    loader: {
      includeDirs: [resolve('proto')]
    }
  }
};