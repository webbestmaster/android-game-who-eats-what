import {Route, Routes, HashRouter} from 'react-router-dom';

import {Home} from '../../page/home/home';
import {Error404} from '../../page/error-404/error-404';

import {appRoute} from './app-route';

type PropsType = {
    server: {
        defaultRoutingPathname: string;
    };
};

export function AppRouting(props: PropsType): JSX.Element {
    const {server: ignoredServer} = props;

    const switchNode = (
        <Routes>
            <Route element={<Home />} path={appRoute.root.path} />

            <Route element={<Error404 />} path="*" />
        </Routes>
    );

    return <HashRouter>{switchNode}</HashRouter>;
}
