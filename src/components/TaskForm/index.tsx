import styles from './styles.module.css';
import { Input } from '../Input';
import { PlayButton } from '../PlayButton';
import { Button } from '../Button';

export function TaskForm() {
  return (
    <form className={styles.taskForm}>
      <div className='formRow'>
        <Input
          id='taskInput'
          type='text'
          label='What task do you want to start?'
          placeholder='Insert the name of your task here...'
          title='Task Input'
        />
      </div>
      <PlayButton />
    </form>
  );
}
