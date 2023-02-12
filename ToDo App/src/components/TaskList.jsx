
import React from "react";
import { IconContext } from "react-icons";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

const TaskList = (props) => {

    const { tasks, clickHandler } = props;



    const listTodos = tasks.map((todo) => <li key={todo.id} className="flex items-center gap-2 text-lg">
        <div className="relative">
            <div onClick={()=>clickHandler(todo.id)}>{
            !todo.completed && 
        <IconContext.Provider value={{ color: "green", className: "text-3xl" }}>
        <MdRadioButtonUnchecked />
        </IconContext.Provider>
        }</div>  <div onClick={()=>clickHandler(todo.id)}>{ 
            todo.completed && 
        <IconContext.Provider value={{ color: "green", className: "text-3xl" }}>
        <MdOutlineCheckCircleOutline />
        </IconContext.Provider>
            
        }</div> </div> {todo.task} - {todo.description}</li>)

    return (
        <div className="bg-gray-100 p-6">
            <ul>
            {listTodos}
            </ul>
        </div>
    )
}

export default TaskList;