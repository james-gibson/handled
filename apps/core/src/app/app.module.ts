import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

//import * as Postgres from '@handled/postgres';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
