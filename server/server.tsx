/* global process */

import {promises as fileSystem} from 'fs';
import path from 'path';

import fastifyStatic from 'fastify-static';
import fastifySecureSession from 'fastify-secure-session';
import fastifyConstructor, {FastifyRequest, FastifyReply} from 'fastify';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import {FastifyError} from 'fastify-error';

import {App, AppPropsType} from '../www/component/app/app';
import {defaultServerDataContextConst} from '../www/provider/server-data/server-data-context-const';

const cwd = process.cwd();

console.warn('server');

const appProps: AppPropsType = {
    server: {defaultRoutingPathname: '/'},
    serverData: defaultServerDataContextConst,
};

const serverPort = 3000;

const contentStringBegin = '<div class="js-app-wrapper">';
const contentStringEnd = '</div>';
const contentStringFull = contentStringBegin + contentStringEnd;

// console.warn(ReactDOMServer.renderToString(<App server={appProps.server}/>));

(async () => {
    const indexHtml: string = await fileSystem.readFile('./dist/index.html', 'utf-8');

    function getHtmlStringByRequest(request: FastifyRequest): string {
        const htmlString = ReactDOMServer.renderToStaticMarkup(
            <App server={appProps.server} serverData={defaultServerDataContextConst} />
        );

        return indexHtml.replace(contentStringFull, [contentStringBegin, htmlString, contentStringEnd].join(''));
    }

    const fastify = fastifyConstructor({logger: true});

    fastify.register(fastifyStatic, {
        prefix: '/', // optional: default '/'
        root: path.join(cwd, 'dist'),
    });

    fastify.register(fastifySecureSession, {
        // the name of the session cookie, defaults to 'session'
        cookie: {
            httpOnly: true, // Use httpOnly for all production purposes
            path: '/',
            // options for setCookie, see https://github.com/fastify/fastify-cookie
        },
        cookieName: 'my-session-cookie',
        // adapt this to point to the directory where secret-key is located
        key: await fileSystem.readFile(path.join(cwd, 'secret-key')),
    });

    /*
    fastify.register(fastifyCookie, {
        secret: "my-secret", // for cookies signature
        parseOptions: {}     // options for parsing cookies
    })
*/

    fastify.get('/', async (request: FastifyRequest, reply: FastifyReply): Promise<string> => {
        reply.type('text/html');

        // throw new Error('asd');

        return getHtmlStringByRequest(request);
    });

    fastify.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
        request.log.warn(error);

        const {statusCode = 500, message} = error;

        // const endStatusCode = statusCode >= 400 ? statusCode : 500

        reply
            .code(statusCode)
            .type('text/plain')
            .send(statusCode >= 500 ? 'Custom Internal server error' : message);
    });

    fastify.setNotFoundHandler((request: FastifyRequest, reply: FastifyReply) => {
        reply.code(404).type('text/plain').send('a custom not found');
    });

    fastify.post('/', (request: FastifyRequest, reply: FastifyReply) => {
        request.session.set('data', request.body);
        reply.send('hello world');
    });

    fastify.get('/set-cookie', (request: FastifyRequest, reply: FastifyReply) => {
        console.log('/////////');
        console.log('set cookie 1');
        console.log(request.session.get('data'));

        // reply.setCookie('session', 'value', { secure: false }) // this will not be used

        request.session.set('data', '12312312312321313');
        request.session.options({maxAge: 1000 * 60 * 60});
        console.log('set cookie 2');

        reply.send('hello world');
    });

    await fastify.listen(serverPort);

    // console.log(htmlString);
})();

/*
const hostname = '127.0.0.1';

const html = '<!DOCTYPE html><html lang="en"><head><meta name="format-detection" content="telephone=no"/><title>typescript app</title><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1"/><meta http-equiv="X-UA-Compatible" content="ie=edge"/><script defer="defer" src="/static/index.js?7d8a2acb280051c9b565"></script><link href="/static/style.css?7d8a2acb280051c9b565" rel="stylesheet"></head><body><div class="js-app-wrapper">{data}</div></body></html>';
*/

/*
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end('Hello World');
    res.end(html.replace('{data}', htmlString));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/
