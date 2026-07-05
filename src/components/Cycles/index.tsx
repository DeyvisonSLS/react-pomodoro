import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cyclesContainer}>
      {/* <h3>Cycles</h3> */}
      <div className={styles.cyclesDotsContainer}>
        <span className={`${styles.edgeDot} ${styles.startFlag}`}></span>
        <span className={`${styles.cycleDotWaiting} ${styles.workTimeWaiting}`}></span>
        <span className={`${styles.cycleDotWaiting} ${styles.shortBreakWaiting}`}></span>
        <span className={`${styles.cycleDotWaiting} ${styles.workTimeWaiting}`}></span>
        <span className={`${styles.cycleDotWaiting} ${styles.shortBreakWaiting}`}></span>
        <span className={`${styles.cycleDotWaiting} ${styles.workTimeWaiting}`}></span>
        <span className={`${styles.cycleDotWaiting} ${styles.shortBreakWaiting}`}></span>
        <span className={`${styles.cycleDotWaiting} ${styles.longBreakWaiting}`}></span>
        <span className={`${styles.edgeDot} ${styles.endFlag}`}></span>
      </div>
      {/* <div className={styles.cyclesSubtitlesContainer}>
        <span>Start</span>
        <span>End</span>
      </div> */}
    </div>
  );
}
