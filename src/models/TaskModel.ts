import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completedDate?: number | null; // When the timer reaches 00:00:00, this property will be set with the current date in milliseconds.
    interruptedDate?: number | null; // When the user clicks the "Interrupt" button, this property will be set with the current date in milliseconds.
    type: keyof TaskStateModel['config']; // 'focus' | 'shortBreak' | 'longBreak'
}