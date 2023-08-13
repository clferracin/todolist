import { CreateTodo } from "./CreateTodo";
import { Header } from "./Header";
import styles from './Upper.module.css';

interface Props {
  onAddTask: (taskTitle:string) => void;
}

export function Upper({onAddTask} : Props) {
  return (
    <div className={styles.upper}>
      <Header/>
      <CreateTodo onAddTask={onAddTask}/>
    </div>
  );
}