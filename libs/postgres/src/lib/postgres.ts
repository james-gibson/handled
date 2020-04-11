import { Injectable } from '@nestjs/common';
import { DarkSkyResponse } from '@handled/types'

import { ConfigService } from '@handled/config';
import * as Knex from 'knex';

const knex = Knex({
  client: 'pg',
  connection: {
    host : ConfigService.getPostgresIp(),
    user : ConfigService.getPostgresUser(),
    password : ConfigService.getPostgresPassword(),
    database : 'james'
  }
});


interface WeatherRecord {
  latitude: number;
  longitude: number;
  timezone: string;
  timestamp: number;
  temperature: number;
  icon: string;
  apparentTemperature: number;
  ozone: number;
  cloudCover: number;
  humidity: number;
  pressure: number;
  time: number;
}

const weatherRecordToPostgresRecord = (record:DarkSkyResponse):WeatherRecord => {
  const { latitude, longitude, timezone, currently } = record;
  const timestamp = Number((Date.now()/1000).toFixed(0));

  return { 
    latitude, 
    longitude,
    ...currently,
    timezone, 
    timestamp,
    time: currently.time
  };
}
@Injectable()
export class PostgresService {
  async getData(): Promise<{ message: string }> {
    const weatherRecord:WeatherRecord = await knex<WeatherRecord>('weather')
      .whereNotNull('timezone')
      .first();
      console.log(weatherRecord)
    return ({ message: 'Welcome to Postgres!' });
  }

  async addWeatherRecord(record:DarkSkyResponse): Promise<void> {
    
    const a:WeatherRecord = await knex<WeatherRecord>('weather')
      .whereNotNull('timezone')
      .first();
      console.log(a)

    const weatherRecord:WeatherRecord = await knex<WeatherRecord>('weather')
      .insert(weatherRecordToPostgresRecord(record)); 
      
      console.debug(weatherRecord)
  }
}
