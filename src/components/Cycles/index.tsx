import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const totalCycleSteps = Array.from({ length: 8 });
  const currentStep = state.currentCycle;

  return (
    <div className={styles.cyclesContainer}>
      {/* <h3>Cycles</h3> */}
      {/* <span className={`${styles.edgeDot} ${styles.startFlag}`}></span> */}
      <div className={styles.cyclesDotsContainer}>
        {totalCycleSteps.map((_, index) => {
          const nextCycleType = getNextCycleType(index === currentStep ? currentStep : getNextCycle(currentStep));

          console.log('nextCycleType', nextCycleType, 'currentStep', currentStep, 'index', index);

          return (
            <span
              key={index}
              className={`${styles.cycleDotWaiting} ${index+1 === currentStep ? styles[nextCycleType] : styles.waiting}`}
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
