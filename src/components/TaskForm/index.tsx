import styles from './styles.module.css';
import { Input } from '../Input';
import { PlayButton } from '../PlayButton';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function TaskForm() {
  const { state, setState } = useTaskContext();

  // const [taskName, setTaskName] = useState(''); // Usar state quando precisamos trackear as mudanças dos dados em tempo real (talvez seja bom considerar utilizar a técnica de debounce para evitar problemas de performance)
  const taskNameInputRef = useRef<HTMLInputElement>(null); // Usar em casos em que não é preciso rastrear em tempo real (a cada renderização) o preenchimento do dado
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if(!taskNameInputRef) return;

    const taskName = taskNameInputRef.current?.value.trim();

    if(!taskName) {
      alert('Insert the task name in the input');
      return;
    };

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completedDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType
    }

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formatedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
      <div className='formRow'>
        <Input
          id='taskInput'
          type='text'
          label='What task do you want to start?'
          placeholder='Insert the name of your task here...'
          title='Task Input'
          // value={taskName}
          // onChange={(e) => setTaskName(e.target.value)}
          ref={taskNameInputRef}
        />
      </div>
      <PlayButton />
    </form>
  );
}
