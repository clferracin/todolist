import { MainHeader } from "./MainHeader";
import { Todos } from "./Todos";

import styles from './Main.module.css';
import { ITask } from "../App";

interface Props {
  tasks: ITask[];
  onDelete: (deleteTaskById: string) => void;
  onToogleTaskCompletedById: (taskId: string) => void;
}

export function Main({ tasks, onDelete, onToogleTaskCompletedById } : Props) {
  return (
    <main className={styles.main}>
      <MainHeader 
        tasks={tasks} 
      />
      <Todos 
        tasks={tasks} 
        onDelete={onDelete} 
        onToogleTaskCompletedById={onToogleTaskCompletedById}
      />
    </main>
  );
}