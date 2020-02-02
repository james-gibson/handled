import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { IntakeService } from '@handled/intake'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly intakeService: IntakeService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get("/darksky")
  getPostgres() {
    return this.intakeService.triggerWeatherCollection();
  }

  //  This name is shit
  @Get("/intake")
  getIntake() {
    return this.intakeService.triggerWeatherCollection();
  }
}
