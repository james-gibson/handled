import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
const distDir = './vue/client'; // join(__dirname, ".", "vue", "client");
console.log({ distDir });
@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: distDir,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
