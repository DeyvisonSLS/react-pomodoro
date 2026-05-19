import { PlayCircle } from 'lucide-react';
import styles from './styles.module.css';

export function TaskForm() {
  return (
    <div className={`${styles.taskForm} ${styles.scribbleBox}`}>
      <p>What task do you want to start?</p>
      <input
        placeholder='Insert the name of your task here...'
        type='text'
      />
      <button className={`${styles.startButton}`}>
        <PlayCircle />
        Start
      </button>
    </div>
  );
}
