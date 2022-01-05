import {AnswerResultType} from '../game/game-type';

import medalListStyle from './medal-list.scss';
import {MedalItem} from './medal-item/medal-item';

type PropsType = {
    answerResultList: Array<AnswerResultType>;
};

export function MedalList(props: PropsType): JSX.Element {
    const {answerResultList} = props;

    return (
        <ul className={medalListStyle.medal_list}>
            {answerResultList.map((answerResult: AnswerResultType, index: number): JSX.Element => {
                return <MedalItem gameResult={answerResult} key={String(index)} />;
            })}
        </ul>
    );
}
