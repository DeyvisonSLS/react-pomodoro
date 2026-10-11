import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  STOP_TASK = 'STOP_TASK',
  RESET_TASKS = 'RESET_TASKS',
}

export type TaskActionWithPayload = {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel;
};

export type TaskActionWithoutPayload =
  | {
      type: TaskActionTypes.RESET_TASKS;
    }
  | {
      type: TaskActionTypes.STOP_TASK;
    };

export type TaskActionModel = TaskActionWithPayload | TaskActionWithoutPayload;
