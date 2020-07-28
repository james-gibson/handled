import * as path from 'path';
import * as fs from 'fs';
import { NestFactory} from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';

// import { Context, HandlerFunction } from '@google-cloud/functions-framework';
import { AppModule } from './app.module';

import * as Express from 'express';

console.log('Creating express');

const expressApp = Express();

const publicSrcDir = path.join(process.cwd(), './vue/client');
expressApp.use('/handled/public', Express.static(publicSrcDir));
// expressApp.get('/data', (req: Express.Request, res: Express.Response) => {
//     res.json({});
// });
async function bootstrap() {
    console.log('Bootstrap');
    const nest = await NestFactory.create<NestExpressApplication>(
        AppModule,
        new ExpressAdapter(expressApp),
    );
    const httpAdapter = nest.getHttpAdapter();
    // nest.setGlobalPrefix('handled');
    console.log({ __dirname, publicSrcDir });
    // nest.use(Express.static(publicSrcDir, {prefix: 'public'}));

    // nest.useStaticAssets(publicSrcDir, {prefix: 'public'});
    // nest.useStaticAssets(path.join(__dirname, 'vue', 'client'), {prefix: 'public'});
    // This listen might not be needed but removing it breaks the cloud function, REVISIT
    // I speculate this is because nest does not attach to express until this is called.
    // maybe better methods exist.
    await nest.listen(3000);
    console.log('bootstrapped');
    return httpAdapter;
}
const init = bootstrap();

module.exports = {
    handler: expressApp,
};
