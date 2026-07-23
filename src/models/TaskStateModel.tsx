import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formatedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number; // 1 to 8
    config: {
        focus: number; // in minutes
        shortBreak: number; // in minutes
        longBreak: number; // in minutes
    }
}