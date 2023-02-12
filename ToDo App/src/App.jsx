import './App.css'
import Header from './components/Header'
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([]); // tasks is an array of objects
  const [isLoading, setIsloading] = useState(false); // isLoading is a boolean

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  const todoClickHandler = (id, updatedItem) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          let completed = true;
          return { ...item, completed };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div className="App h-screen w-screen bg-slate-800 flex justify-center">
      <div className="bg-slate-300 p-8 max-w-3xl w-full m-auto rounded-2xl">
        <Header />
        {/* add addTask as props t CreateTask */}
        <CreateTask addTask={addTask} />
        <TaskList tasks={tasks} clickHandler={todoClickHandler} />
      </div>
    </div>
  )
}

export default App
