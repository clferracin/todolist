import {useState} from 'react';
import styles from './CreateTodo.module.css';
import { PlusIcon } from './PlusIcon';

interface Props {
  onAddTask: (taskTitle:string) => void;
}


export function CreateTodo({onAddTask}: Props) {

  const [title, setTitle] = useState('');

  function handleAddTask(){
    onAddTask(title);
    setTitle('');
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => { setTitle(e.target.value); };

  return(
    <div className={styles.createTodo}>
      <input type="text" placeholder="Adicione uma nova tarefa" value={title} onChange={handleChange} />
      <a href="#" onClick={handleAddTask}>
        Criar
        <PlusIcon/>
      </a>
    </div>
  );
}