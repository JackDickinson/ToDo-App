import React from "react";
import { IconContext } from "react-icons";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const Task = (props) => {

    const {clickHandler, removeTask, id, completed, task, description} = props;

    return (
        <li key={id} className="flex items-center gap-2 p-3 rounded-xl mb-3 bg-slate-200 text-lg">
        <div className="relative">
            <div className="cursor-pointer" onClick={()=>clickHandler(id)}>{
            !completed && 
        <IconContext.Provider value={{ color: "green", className: "text-3xl" }}>
        <MdRadioButtonUnchecked />
        </IconContext.Provider>
        }</div>  <div className="cursor-pointer" onClick={()=>clickHandler(id)}>{ 
            completed && 
        <IconContext.Provider value={{ color: "green", className: "text-3xl" }}>
        <MdOutlineCheckCircleOutline />
        </IconContext.Provider>
            
        }</div> </div> <div className="flex flex-col ml-2"> <span>{task}</span> <span className="text-sm pt-1 text-slate-600">{description}</span></div> <span onClick={()=>removeTask(id)} className="flex flex-1 justify-end cursor-pointer"><RiDeleteBinLine /></span> </li>
    )
}

export default Task;