import React, { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { IconContext } from "react-icons";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";


const Task = (props) => {

    const {clickHandler, removeTask, id, completed, task, description, todo} = props;

    const [height, setHeight] = useState('auto')

    function updateHeight() {
        setHeight(0)
      }

    return (
        <AnimateHeight height={height}>
        <li className="flex items-center gap-2 p-3 overflow-hidden mt-3 rounded-xl bg-slate-200 text-lg">
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
            
        }</div> </div> <div className="flex flex-col ml-2"> <span className={`${completed ? "line-through" : ""}`}>{task}</span> <span className="text-sm pt-1 text-slate-600">{description}</span></div> <div className="flex flex-1 justify-end"><span onClick={()=>{updateHeight(); removeTask(id)}} className="cursor-pointer"><RiDeleteBinLine /></span></div> </li></AnimateHeight>
    )
}

export default Task;