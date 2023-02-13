
import React from "react";
import { TransitionGroup } from "react-transition-group";
import Task from '../components/Task'
import { CSSTransition } from "react-transition-group";


const TaskList = (props) => {

    const { tasks, completedTasks, clickHandler, removeTask } = props;

    return (
        <div className="bg-gray-100 p-6 mx-8 rounded-xl">
        <TransitionGroup component="ul">
            {tasks.map((todo) => (
                <CSSTransition key={todo.id} timeout={400} classNames="item">
                    <Task id={todo.id} todo={todo} clickHandler={clickHandler} removeTask={removeTask} completed={todo.completed} task={todo.task} description={todo.description} />
                </CSSTransition>
            ))}
        </TransitionGroup>
            <div className="mt-8 transition-all duration-700">
                <p className={`transition-all duration-700 ${tasks.length > 0 ? "opacity-50 h-auto" : "opacity-0 overflow-hidden h-0"}`}>Completed {completedTasks} out of {tasks.length}</p>
                <p className={`transition-all duration-700 ${tasks.length == 0 ? "opacity-50 h-auto" : "opacity-0 overflow-hidden h-0"}`}>No Tasks</p>
            </div>
        </div>
    )
}

export default TaskList;