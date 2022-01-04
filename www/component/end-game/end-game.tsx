import {GameResultType} from '../game/game-type';

import star1 from './image/star-1.svg';
import star2 from './image/star-2.svg';
import star3 from './image/star-3.svg';

import endGameStyle from './end-game.scss';
import endGameBackground from './image/end-game-popup.svg';

type PropsType = {
    gameResultList: Array<GameResultType>;
    handleNewGame: () => void;
};

export function EndGame(props: PropsType): JSX.Element {
    const {gameResultList, handleNewGame} = props;
    // const {width, height} = useScreenSize();
    // const padding = 40;

    console.log(gameResultList);

    return (
        <button className={endGameStyle.end_game} onClick={handleNewGame} type="button">
            <img alt="star 1" className={endGameStyle.end_game_star_1} src={star1} />
            <img alt="star 2" className={endGameStyle.end_game_star_2} src={star2} />
            <img alt="star 3" className={endGameStyle.end_game_star_3} src={star3} />
            <img alt="end game" className={endGameStyle.end_game_background_image} src={endGameBackground} />
        </button>
    );
}
