/* global window, document, setTimeout */

import {StrictMode} from 'react';
import {hydrate, render} from 'react-dom';

import {selector} from './const';
import {App, AppPropsType} from './component/app/app';
import {defaultServerDataContextConst} from './provider/server-data/server-data-context-const';
import {onAppLoaded} from './util/android-app-loaded';

(function main() {
    const nodeWrapper = document.querySelector(selector.appWrapper);
    const appProps: AppPropsType = {
        server: {
            defaultRoutingPathname: '',
        },
        serverData: defaultServerDataContextConst,
    };

    if (!nodeWrapper) {
        throw new Error('[main]: Can not find appWrapper');
    }

    const {innerHTML} = nodeWrapper;

    const appNode = (
        <StrictMode>
            <App server={appProps.server} serverData={appProps.serverData} />
        </StrictMode>
    );

    if (innerHTML.trim() === '') {
        console.log('[main]: Render App as SPA');
        render(appNode, nodeWrapper);
        setTimeout(onAppLoaded, 2e3);
        window.addEventListener('load', onAppLoaded, false);
        return;
    }

    console.log('[main]: Render App as SSR');
    hydrate(appNode, nodeWrapper);
})();
