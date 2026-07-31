import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  return (
    <div className={styles.cyclesContainer}>
      {/* <h3>Cycles</h3> */}
      <div className={styles.cyclesDotsContainer}>
        <span className={`${styles.edgeDot} ${styles.startFlag}`}></span>
        <span
          className={`${styles.cycleDotWaiting} ${styles.workTimeWaiting}`}
        ></span>
        <span
          className={`${styles.cycleDotWaiting} ${styles.shortBreakWaiting}`}
        ></span>
        <span
          className={`${styles.cycleDotWaiting} ${styles.workTimeWaiting}`}
        ></span>
        <span
          className={`${styles.cycleDotWaiting} ${styles.shortBreakWaiting}`}
        ></span>
        <span
          className={`${styles.cycleDotWaiting} ${styles.workTimeWaiting}`}
        ></span>
        <span
          className={`${styles.cycleDotWaiting} ${styles.shortBreakWaiting}`}
        ></span>
        <span
          className={`${styles.cycleDotWaiting} ${styles.longBreakWaiting}`}
        ></span>
        <span className={`${styles.edgeDot} ${styles.endFlag}`}></span>
      </div>
      {/* <div className={styles.cyclesSubtitlesContainer}>
        <span className={styles.startLabel}>Start</span>
        <span className={styles.startLabel}>End</span>
      </div> */}
    </div>
  );
}
