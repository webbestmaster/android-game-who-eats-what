import {TaskType} from './task-type';

import {bearAnimal} from './animal/bear/bear';
import {meatFood} from './food/meat/meat';
import {rabbitAnimal} from './animal/rabbit/rabbit';

const task001: TaskType = {
    animalId: bearAnimal.id,
    eatFoodIdList: [meatFood.id],
    id: 'task-001',
};

const task002: TaskType = {
    animalId: rabbitAnimal.id,
    eatFoodIdList: [meatFood.id],
    id: 'task-002',
};

export const taskList: Array<TaskType> = [task001, task002];
