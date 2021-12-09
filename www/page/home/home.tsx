import {useSingleTouch} from '../../hook/single-touch-hook/single-touch-hook';
import {Game} from '../../component/game/game';

import homeStyle from './home.scss';

export function Home(): JSX.Element {
    const singleTouch = useSingleTouch();

    return (
        <div className={homeStyle.home}>
            <Game />

            <div>{JSON.stringify(singleTouch, null, 2)}</div>

            <div>home</div>

            <button onClick={evt => console.log(evt)} type="button">
                button
            </button>
            <div>home</div>
        </div>
    );
}
