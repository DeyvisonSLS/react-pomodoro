import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const totalCycleSteps = Array.from({ length: 8 });
  const currentStep = state.currentCycle;

  const cycleDescriptionMap: { [key: string]: string } = {
    focus: 'Focus',
    shortBreak: 'Short Break',
    longBreak: 'Long Break',
  };

  return (
    <div className={styles.cyclesContainer}>
      {/* <h3>Cycles</h3> */}
      {/* <span className={`${styles.edgeDot} ${styles.startFlag}`}></span> */}
      <div className={styles.cyclesDotsContainer}>
        {totalCycleSteps.map((_, index) => {
          const nextCycleType = getNextCycleType(index + 1);
          const cycleDescription =
            cycleDescriptionMap[nextCycleType] ?? cycleDescriptionMap.focus;

          // console.log('nextCycleType', nextCycleType, 'currentStep', currentStep, 'index', index);
          return (
            <span
              key={`${nextCycleType}-${index}`}
              className={`${styles.edgeDot} ${index + 1 === currentStep ? styles[nextCycleType] : styles.waiting}`}
              aria-label={`Cycle ${index + 1}: ${cycleDescription}`}
              title={`Cycle ${index + 1}: ${cycleDescription}`}
            ></span>
          );
        })}
      </div>
      {/* <span className={`${styles.edgeDot} ${styles.endFlag}`}></span> */}
      {/* <div className={styles.cyclesSubtitlesContainer}>
        <span className={styles.startLabel}>Start</span>
        <span className={styles.startLabel}>End</span>
      </div> */}
    </div>
  );
}
