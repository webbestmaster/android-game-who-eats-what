import {useEffect} from 'react';

import {ServerDataContextType} from '../../provider/server-data/server-data-context-type';
import {singleTouchInitialize} from '../../hook/single-touch-hook/single-touch-initialize';

import {AppProvider} from './app-provider';
import {AppRouting} from './app-routing';

export type AppPropsType = {
    server: {
        defaultRoutingPathname: string;
    };
    serverData: ServerDataContextType;
};

export function App(props: AppPropsType): JSX.Element {
    const {server, serverData} = props;

    useEffect(() => {
        singleTouchInitialize();
    }, []);

    return (
        <AppProvider serverData={serverData}>
            <AppRouting server={server} />
        </AppProvider>
    );
}
