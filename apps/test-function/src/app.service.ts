import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { createBundleRenderer } from 'vue-server-renderer';
console.log({currentPath:path.resolve('.')});
console.log('Loading template');

const templateSrc = path.resolve(`./templates/index.html`);
const template = fs.readFileSync(
    path.join(templateSrc),
    'utf-8',
);

console.log('Creating Vue');
const serverBundle = fs.readFileSync(
    path.resolve(`./vue/server/vue-ssr-server-bundle.json`),
    'utf-8',
);
const clientManifest = fs.readFileSync(
    path.resolve(`./vue/client/vue-ssr-client-manifest.json`),
    'utf-8',
);

console.log('Creating Vue:Renderer');
const renderer = createBundleRenderer(JSON.parse(serverBundle), {
    runInNewContext: false,
    template,
    clientManifest: JSON.parse(clientManifest),
    inject: true,
});

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getRoot(context: { response, request }): any {
    const renderContext = {url: context.request.url };
    console.log('getting route', renderContext);
    let html;
    try {
      html = renderer.renderToString(renderContext);
    } catch (err) {
      if (err) {
        console.log(err, renderContext)
        if (+err.message === 404) {
            console.log(`404 Not Found: ${renderContext}`);
            html = 'Page not found';
        } else {
            console.log(err);
            html = 'Internal Server Error';
        }
      }
    }
    return html;
  }
}
