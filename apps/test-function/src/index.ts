const path = require('path');

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';

import { Context, HandlerFunction } from '@google-cloud/functions-framework';
import { AppModule } from './app.module';

import * as Express from 'express';

const { createBundleRenderer } = require('vue-server-renderer');

console.log('Loading template');

const templateSrc = path.resolve(`${process.env.HANDLED_IS_LOCAL ? process.cwd() : __dirname}/dist/templates/index.html`)
const template = require('fs').readFileSync(
    path.join(templateSrc),
    'utf-8'
);

console.log('Creating Vue');
const serverBundle = require(`./vue/server/vue-ssr-server-bundle.json`);
const clientManifest = require(`./vue/client/vue-ssr-client-manifest.json`);
console.log('Creating Vue:Renderer');
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest,
    inject: false,
});

console.log('Creating express');

const expressApp = Express();
const publicSrcDir = path.join(process.cwd(), './vue/client');

async function bootstrap() {
    console.log('Bootstrap');
    const nest = await NestFactory.create<NestExpressApplication>(
        AppModule,
        new ExpressAdapter(expressApp),
    );
    const httpAdapter = nest.getHttpAdapter();

    console.log({ __dirname, publicSrcDir });
    // nest.use(Express.static(publicSrcDir, {prefix: 'public'}));

    nest.useStaticAssets(publicSrcDir, {prefix: '/'});
    //nest.useStaticAssets(path.join(__dirname, 'vue', 'client'), {prefix: 'public'});
    // This listen might not be needed but removing it breaks the cloud function, REVISIT
    // I speculate this is because nest does not attach to express until this is called.
    // maybe better methods exist.
    await nest.listen(3000);
    return httpAdapter;
}
const init = bootstrap();
expressApp.use('/public', Express.static(publicSrcDir));
expressApp.get('/data', (req: Express.Request, res: Express.Response) => {
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
