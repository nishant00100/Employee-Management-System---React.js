import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = (e) => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const [newTask, setNewTask] = useState({});

    const submitHandler = () => {
        e.preventDefault();

        setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, failed:false, completed:false});

        const data = userData;

        data.forEach(function(elem){
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask);
                elem.taskNumbers.newTask = elem.taskNumbers.newTask+1;
            }
        })
        setUserData(data);

        setTaskDate('');
        setTaskDescription('');
        setAssignTo('');
        setCategory('');
        setTaskTitle('');
        // console.log(taskTitle, taskDate, taskDescription, assignTo, category);
    }
    return (
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded" >
            <form onSubmit={(e) => {
                submitHandler(e);
            }} action="" 
            className="w-full flex-wrap flex items-start justify-between"
            >
                <div className="w-1/2">
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5' >Task Title</h3>
                        <input value={taskTitle} onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="Enter task title" />
                    </div>
                    <div>
                        <h3 value={taskDate} onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }} className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 value={assignTo} onChange={(e)=>{
                            setAssignTo(e.target.value)
                        }} className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 value={category} onChange={(e)=>{
                            setCategory(e.target.value)
                        }} className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc.' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-wrap items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription} onChange={(e)=>{
                            setTaskDescription(e.target.value)
                        }} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" cols="30" rows="10" placeholder="Enter task description"></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' >Create task</button>
                </div>


            </form>
        </div>
    )
}

export default CreateTask
