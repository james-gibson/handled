import { Injectable } from '@nestjs/common';

const values = {
    darkSkyKey: process.env.HANDLED_DARKSKY || '',
    postgres: {
        user: process.env.HANDLED_POSTGRES_USER || '',
        ip: process.env.HANDLED_POSTGRES_IP || '',
        password: process.env.HANDLED_POSTGRES_PASSWORD
    },
    latitude: Number(process.env.HANDLED_LATITUDE || ''),
    longitude: Number(process.env.HANDLED_LONGITUDE || '')
}

@Injectable()
export class ConfigService {
    static getDarkSkyKey() {
        return values.darkSkyKey;
    }

    static getPostgresIp() {
        return values.postgres.ip;
    }

    static getPostgresUser() {
        return values.postgres.user;
    }

    static getPostgresPassword() {
        return values.postgres.password;
    }

    static getHome():{latitude:number, longitude: number} {
        return {
            latitude: values.latitude, 
            longitude: values.longitude
        };
    }
}