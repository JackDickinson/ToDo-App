
import React from "react";
import Task from '../components/Task'

const TaskList = (props) => {

    const { tasks, completedTasks, clickHandler, removeTask, } = props;

    const listTodos = tasks.map((todo) => <Task id={todo.id} clickHandler={clickHandler} removeTask={removeTask} completed={todo.completed} task={todo.task} description={todo.description} />)

    return (
        <div className="bg-gray-100 p-6 mx-8 rounded-xl">
            <ul>
            {
            tasks.length > 0 ? listTodos : <p className="opacity-50 flex justify-center">Empty tasks.</p>}
            </ul>
            <div className="mt-8 opacity-50">
                <p>Completed {completedTasks} out of {tasks.length}</p>
            </div>
        </div>
    )
}

export default TaskList;