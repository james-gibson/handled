import * as path from 'path';
import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';

import { Context, HandlerFunction } from '@google-cloud/functions-framework';
import { AppModule } from './app.module';

import * as Express from 'express';

import { createBundleRenderer } from 'vue-server-renderer';

console.log('Loading template');

const templateSrc = path.resolve(`./templates/index.html`);
const template = fs.readFileSync(
    path.join(templateSrc),
    'utf-8'
);

console.log('Creating Vue');
const serverBundle = fs.readFileSync(
    path.resolve(`./vue/server/vue-ssr-server-bundle.json`),
    'utf-8'
);
const clientManifest = fs.readFileSync(
    path.resolve(`./vue/client/vue-ssr-client-manifest.json`),
    'utf-8'
);

console.log('Creating Vue:Renderer');
const renderer = createBundleRenderer(JSON.parse(serverBundle), {
    runInNewContext: false,
    template,
    clientManifest: JSON.parse(clientManifest),
    inject: false,
});

console.log('Creating express');

const expressApp = Express();
const publicSrcDir = path.join(process.cwd(), './dist/vue/client');

async function bootstrap() {
    console.log('Bootstrap');
    const nest = await NestFactory.create<NestExpressApplication>(
        AppModule,
        new ExpressAdapter(expressApp),
    );
    const httpAdapter = nest.getHttpAdapter();
    nest.setGlobalPrefix('handled');
    console.log({ __dirname, publicSrcDir });
    // nest.use(Express.static(publicSrcDir, {prefix: 'public'}));

    // nest.useStaticAssets(publicSrcDir, {prefix: '/public'});
    // nest.useStaticAssets(path.join(__dirname, 'vue', 'client'), {prefix: 'public'});
    // This listen might not be needed but removing it breaks the cloud function, REVISIT
    // I speculate this is because nest does not attach to express until this is called.
    // maybe better methods exist.
    await nest.listen(3000);
    return httpAdapter;
}
const init = bootstrap();
expressApp.use('/handled/public', Express.static(publicSrcDir));
expressApp.get('/handled/data', (req: Express.Request, res: Express.Response) => {
    res.json({});
});

expressApp.get('*', (req, res) => {
    const context = {
        url: req.url,
    };

    renderer.renderToString(context, (err, html) => {
        if (err) {
            if (+err.message === 404) {
                console.log(`404 Not Found: ${context.url}`)
                res.status(404).end('Page not found');
            } else {
                console.log(err);
                res.status(500).end('Internal Server Error');
            }
        }

        res.end(html);
    });
});

module.exports = {
    handler: expressApp,
};

console.log('bootstrapped');
