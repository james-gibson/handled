import { Injectable } from '@nestjs/common';
import { DarkskyService } from '@handled/darksky';
import { PostgresService } from '@handled/postgres';


@Injectable()
export class IntakeService {
    constructor(private readonly postgresService: PostgresService, private readonly darkskyService: DarkskyService) {}
    triggerWeatherCollection() {
        return this.darkskyService.getData().then(async (data)=> {
            await this.postgresService.addWeatherRecord(data);
            return data;
        });
    }
}