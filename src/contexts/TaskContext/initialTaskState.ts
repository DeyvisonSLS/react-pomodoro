import type { TaskStateModel } from '../../models/TaskStateModel';

// Este é o estado inicial da aplicação.
// Quando a página abre, o contexto começa com esses valores básicos.
// Pense nisso como o estado "em branco" do pomodoro.
export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    focus: 25,
    shortBreak: 5,
    longBreak: 15,
    waiting: null,
  },
};
