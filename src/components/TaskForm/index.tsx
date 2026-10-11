import styles from './styles.module.css';
import { Input } from '../Input';
import { Button } from '../Button';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { PlayCircle, StopCircle } from 'lucide-react';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function TaskForm() {
  const { state, dispatch } = useTaskContext();

  // const [taskName, setTaskName] = useState(''); // Usar state quando precisamos trackear as mudanças dos dados em tempo real (talvez seja bom considerar utilizar a técnica de debounce para evitar problemas de performance)
  const taskNameInputRef = useRef<HTMLInputElement>(null); // Usar em casos em que não é preciso rastrear em tempo real (a cada renderização) o preenchimento do dado
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!taskNameInputRef) return;

    const taskName = taskNameInputRef.current?.value.trim();

    if (!taskName) {
      alert('Insert the task name in the input');
      return;
    }

    const duration = state.config[nextCycleType];

    if (duration === null || duration === undefined) {
      alert('The current cycle does not have a duration yet.');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completedDate: null,
      interruptedDate: null,
      duration,
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleStopTask() {
    if (!state.activeTask) return;
    dispatch({ type: TaskActionTypes.STOP_TASK });
  }

  return (
    <form
      onSubmit={handleCreateNewTask}
      className={styles.taskForm}
    >
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
          disabled={!!state.activeTask}
        />
      </div>
      <div className='formRow'>
        {!state.activeTask && (
          <Button
            variant='cta'
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircle size={24} />}
            key='sendForm'
          >
            Start
          </Button>
        )}
        {!!state.activeTask && (
          <Button
            variant='cta'
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            type='button'
            icon={<StopCircle size={24} />}
            color='warning'
            onClick={handleStopTask}
            key='stopTask'
          >
            Stop
          </Button>
        )}
      </div>
    </form>
  );
}
