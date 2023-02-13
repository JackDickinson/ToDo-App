
import React from 'react';


const CreateTask = (props) => {

// get props
 const { addTask } = props;

// create a function to handle the form submission
const addTdodo = (e) => {
    e.preventDefault();
    // check if values aren't empty
    if (e.target.task.value != ''  && e.target.description.value != '') {
    const task = e.target.task.value;
    const description = e.target.description.value;
    const completed = false;
    const newTask = {task, description, completed };
    addTask(newTask);
    // clear the form
    e.target.task.value = '';
    e.target.description.value = '';
    }
}

return (
    <div className="flex justify-center">
        <div className="bg-slate-300 p-8 w-full m-auto rounded-2xl">
            <form onSubmit={addTdodo} className="flex flex-col">
                <label htmlFor="task" className="text-slate-800 font-bold pb-1">Task</label>
                <input type="text" name="task" id="task" className="border-2 border-slate-800 rounded-lg p-3 mb-4" />
                <label htmlFor="description" className="text-slate-800 font-bold pb-1">Description</label>
                <textarea name="description" id="description" className="border-2 border-slate-800 rounded-lg p-2 mb-4" />
                <button className="bg-slate-800 text-slate-300 rounded-lg p-3">Create Task</button>
            </form>
        </div>
    </div>

)
};

export default CreateTask;