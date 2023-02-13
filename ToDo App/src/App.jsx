import './App.css'
import Header from './components/Header'
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList'
import { useState } from 'react'
import { useEffect } from 'react';
import { IconContext } from "react-icons";
import { ImSpinner2 } from "react-icons/Im";

function App() {

  const [tasks, setTasks] = useState([]); // tasks is an array of objects
  const [isLoading, setIsloading] = useState(false); // isLoading is a boolean
  const [completedTasks, setCompletedTasks] = useState(0);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  const removeTask = (id) => {
    const newTasksWithRemoval = tasks.filter(function(task) { return task.id != id; }); 
    setTasks(newTasksWithRemoval
    );
  }

  const setCompletedCount = () => {
    const completed = tasks.filter(function(task) { return task.completed == true })
    setCompletedTasks(completed.length)
  }

  const todoClickHandler = (id) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          let completed = !item.completed;
          return { ...item, completed };
        } else {
          return item;
        }
      })
    );
  }

  useEffect(() => {
    setIsloading(true);
    fetch("http://localhost:3004/todos").then(res => res.json()).then(result => {
      setTimeout(() => {
        setIsloading(false);
        setTasks(result);
      }, 750);
    }).catch((error) => {
      console.log(error)
      setIsloading(false)});
  },[]);

  useEffect(() => {
    setCompletedCount();
  },[tasks])

  return (
    <div className="App h-screen w-screen flex items-center justify-center">
      <div className="bg-slate-300 max-w-3xl w-full m-auto rounded-2xl mx-4 p-4 sm:p-8 sm:mx-6">
        <Header />
        <CreateTask addTask={addTask} />
        {isLoading ? <div className='w=full flex justify-center items-center mb-6 gap-2 flex-row-reverse'> <span>Loading tasks...</span>
        <IconContext.Provider value={{ className: "text-4xl animate-spin" }}>
        <ImSpinner2 />
        </IconContext.Provider>
        </div> : <TaskList tasks={tasks} completedTasks={completedTasks} removeTask={removeTask} clickHandler={todoClickHandler} /> } 
      </div>
    </div>
  )
}

export default App
