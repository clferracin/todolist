import { BsFillCheckCircleFill } from 'react-icons/bs';
import { ITask } from '../App';
import { DeleteIcon } from './DeleteIcon';
import styles from './Todo.module.css';

interface Props {
  task: ITask;
  onDelete: (deleteTaskById: string) => void;
  onToogleTaskCompletedById: (taskId: string) => void;
}


export function Todo({task, onDelete, onToogleTaskCompletedById}:Props) {

  const handleDeleteTask = () => {
    onDelete(task.id)
  }

  const handleToogleTaskCompletedById = () => {
    onToogleTaskCompletedById(task.id)
  }

  return (
    <div className={styles.taskWrapper}>
      <button className={styles.checkContainer} onClick={handleToogleTaskCompletedById}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div /> }
      </button>

      <p className={task.isCompleted ? styles.taskCompleted : "" }>{task.title}</p>

      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <DeleteIcon/>
      </button>
    </div>
  );
}