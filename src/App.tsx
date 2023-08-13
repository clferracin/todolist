import { useEffect } from 'react';
import { Upper } from './components/Upper';
import { Main } from './components/Main';

import './styles.css';
import styles from './App.module.css';
import { useState } from 'react';


const LOCAL_STORAGE_KEY = "todo:savedTasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {

  const initialTasks = [
    {
      id: "1",
      title: 'Ir ao mercado.',
      isCompleted: true,
    },
    {
      id: "2",
      title: 'Lavar roupas.',
      isCompleted: false,
    },
    {
      id: "3",
      title: 'Estudar REACT.',
      isCompleted: true,
    },
  ];


  const [tasks, setTasks] = useState<ITask[]>(initialTasks);

  function setTasksAndSave(newTasks: ITask[]){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function addTask(taskTitle:string) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ]);
  }

  function deleteTaskById(taskId: string){
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);

  }

  function toogleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  return (
    <div className={styles.wrapper}>
      <Upper onAddTask={addTask}/>
      <Main tasks={tasks} onDelete={deleteTaskById} onToogleTaskCompletedById={toogleTaskCompletedById} />
    </div>
  );

}
