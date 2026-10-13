import type { TaskModel } from '../../models/TaskModel';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import styles from './styles.module.css';

type CycleType = Exclude<TaskModel['type'], 'waiting'>;

type TaskTipProps = {
  activeTask: TaskModel | null;
  nextCycleType: TaskModel['type'];
  config: TaskStateModel['config'];
};

function isCycleType(type: TaskModel['type']): type is CycleType {
  return type === 'focus' || type === 'shortBreak' || type === 'longBreak';
}

export function TaskTip({ activeTask, nextCycleType, config }: TaskTipProps) {
  const cycleType = activeTask && isCycleType(activeTask.type)
    ? activeTask.type
    : isCycleType(nextCycleType)
      ? nextCycleType
      : 'focus';
  const duration = config[cycleType];

  const tips: Record<CycleType, React.ReactNode> = {
    focus: activeTask ? (
      <>Focus for <b>{duration} min</b>. Avoid distractions.</>
    ) : (
      <>Next: <b>{duration} min focus</b>. Get ready to concentrate.</>
    ),
    shortBreak: activeTask ? (
      <><b>{duration} min break</b>. Relax and recharge.</>
    ) : (
      <>Next: <b>{duration} min break</b>. Take a moment to relax.</>
    ),
    longBreak: activeTask ? (
      <><b>{duration} min break</b>. Rest before the next Pomodoro.</>
    ) : (
      <>Next: <b>{duration} min break</b>. Rest and recharge.</>
    ),
  };

  return (
    <div className={styles.tipCardContainer}>
      <div className={`${styles.tipCard} ${activeTask ? styles.activeTaskTip : styles.noActiveTaskTip}`}>
        <span className={styles.tipBadge}>{activeTask ? 'Live' : 'Next'}</span>
        <div className={styles.tipText}>
          <span className={styles.tipMessage}>{tips[cycleType]}</span>
          {activeTask && (
            <span className={styles.timeRemaining}>
              <b>Time remaining:</b> {formatSecondsToMinutes(activeTask.duration)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
