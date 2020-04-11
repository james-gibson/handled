import { Injectable } from '@nestjs/common';
import { ConfigService } from '@handled/config';
import { DarkSkyResponse } from '@handled/types'
// import { PostgresService } from '@handled/postgres';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Darksky = require('dark-sky');

const darksky = new Darksky(ConfigService.getDarkSkyKey());

@Injectable()
export class DarkskyService {
  
  async getData(): Promise<DarkSkyResponse> {
    return darksky
    .coordinates({
      lat: ConfigService.getHome().latitude,
      lng: ConfigService.getHome().longitude
    })
    .language('en')
    .exclude('minutely,daily')
    .get()
    .then((data:DarkSkyResponse) => {
      console.log(data);

      return data;
    })
  }
}
