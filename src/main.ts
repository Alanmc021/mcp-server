// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();

import { runCliServer } from '@modelcontextprotocol/sdk';
import { AppModule } from './app.module';

async function bootstrap() {
  await runCliServer(AppModule); // inicia com suporte a STDIO (requerido pelo Inspector)
}
bootstrap();
