import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DarkskyService } from "@handled/darksky";
import { ConfigService } from "@handled/config";
import { IntakeService } from "@handled/intake";
import { PostgresService } from '@handled/postgres';
import * as observation from '@handled/observation';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PostgresService,ConfigService,IntakeService,DarkskyService, AppService],
})
export class AppModule {}
