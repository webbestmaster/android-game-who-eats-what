import {AnswerResultType} from '../game/game-type';

export function getStarCount(gameResultList: Array<AnswerResultType>): number {
    const currentAttemptCount = gameResultList.reduce<number>(
        (accum: number, current: AnswerResultType) => accum + current.attemptCount,
        0
    );
    const minAttemptCount = gameResultList.length;
    const mistakesCount = currentAttemptCount - minAttemptCount;

    // 20% wrong for first attempt
    if (mistakesCount <= Math.round(minAttemptCount * 0.2)) {
        return 3;
    }

    // 50% wrong for first attempt
    if (mistakesCount <= Math.round(minAttemptCount * 0.5)) {
        return 2;
    }

    return 1;
}
