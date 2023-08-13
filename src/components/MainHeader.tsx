import { ITask } from '../App';
import styles from './MainHeader.module.css';

interface Props {
  tasks: ITask[];
}

export function MainHeader({ tasks }: Props) {

  const finished = tasks.filter((task) => task.isCompleted ).length;
  const tasksQuantity = tasks.length;

  return (
    <header className={styles.mainHeader}>
      <div className={styles.created}>
        <p>Tarefas criadas</p>
        <span className={styles.span}>{tasksQuantity}</span>
      </div>
      <div className={styles.finished}>
        <p>Concluídas</p>
        <span className={styles.span}>{finished} de {tasksQuantity}</span>
      </div>
    </header>
  );
}