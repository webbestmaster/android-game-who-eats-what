import {AnswerResultType} from '../game/game-type';
import {IsRender} from '../../layout/is-render/is-render';

import star1 from './image/star-1.svg';
import star2 from './image/star-2.svg';
import star3 from './image/star-3.svg';
import playButton from './image/play-button.svg';

import endGameStyle from './end-game.scss';
import endGameBackground from './image/end-game-popup.svg';
import {getStarCount} from './end-game-helper';

type PropsType = {
    answerResultList: Array<AnswerResultType>;
    handleNewGame: () => void;
};

export function EndGame(props: PropsType): JSX.Element {
    const {answerResultList, handleNewGame} = props;
    const starCount = getStarCount(answerResultList);

    return (
        <div className={endGameStyle.end_game}>
            <IsRender isRender={starCount >= 1}>
                <img alt="star 1" className={endGameStyle.end_game_star_1} src={star1} />
            </IsRender>
            <IsRender isRender={starCount >= 2}>
                <img alt="star 2" className={endGameStyle.end_game_star_2} src={star2} />
            </IsRender>
            <IsRender isRender={starCount >= 3}>
                <img alt="star 3" className={endGameStyle.end_game_star_3} src={star3} />
            </IsRender>
            <button className={endGameStyle.play_button} onClick={handleNewGame} type="button">
                <img alt="play" className={endGameStyle.play_button__image} src={playButton} />
            </button>
            <img alt="end game" className={endGameStyle.end_game_background_image} src={endGameBackground} />
        </div>
    );
}
