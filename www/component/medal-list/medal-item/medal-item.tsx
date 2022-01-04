import {useScreenSize} from 'react-system-hook';

import {GameResultType} from '../../game/game-type';

import medalItemStyle from './medal-item.scss';

import medal1 from './image/medal-1.svg';
import medal2 from './image/medal-2.svg';
import medal3 from './image/medal-3.svg';

type PropsType = {
    gameResult: GameResultType;
};

export function MedalItem(props: PropsType): JSX.Element {
    const {gameResult} = props;
    const {attemptCount} = gameResult;
    const {width, height} = useScreenSize();
    const medalSize = Math.round(Math.min(width, height) / 12);

    let imageSrc: string = medal1;

    if (attemptCount === 2) {
        imageSrc = medal2;
    }

    if (attemptCount >= 3) {
        imageSrc = medal3;
    }

    return (
        <li
            className={medalItemStyle.medal_item}
            style={{
                height: medalSize,
                width: medalSize,
            }}
        >
            <img alt={`attempt count is ${attemptCount}`} className={medalItemStyle.medal_item__image} src={imageSrc} />
        </li>
    );
}
