import {TbClipboardText } from 'react-icons/tb'
import { ITask } from "../App";
import { Todo } from "./Todo";

import styles from './Todos.module.css';

interface Props {
  tasks: ITask[];
  onDelete: (deleteTaskById: string) => void;
  onToogleTaskCompletedById: (taskId: string) => void;
}

export function Todos({tasks, onDelete, onToogleTaskCompletedById} : Props) {
  return (
    <div className={styles.todos}>
      {tasks.map(task => {
        return (
          <Todo 
            key={task.id} 
            task={task} 
            onDelete={onDelete} 
            onToogleTaskCompletedById={onToogleTaskCompletedById}
          />
        );
      })}

      {tasks.length <= 0 && (
        <section className={styles.empty}>
          <TbClipboardText size={50}/>
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </section>
      )}
    </div>
  );
}