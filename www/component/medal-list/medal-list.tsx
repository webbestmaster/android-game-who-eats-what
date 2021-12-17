import {GameEndResultType} from '../game/game-type';

import medalListStyle from './medal-list.scss';
import {MedalItem} from './medal-item/medal-item';

type PropsType = {
    gameResultList: Array<GameEndResultType>;
};

export function MedalList(props: PropsType): JSX.Element {
    const {gameResultList} = props;

    return (
        <ul className={medalListStyle.medal_list}>
            {gameResultList.map((gameResult: GameEndResultType, index: number): JSX.Element => {
                return <MedalItem gameResult={gameResult} key={String(index)} />;
            })}
        </ul>
    );
}
