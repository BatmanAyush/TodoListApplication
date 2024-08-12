import React, { useRef, useState } from 'react';
import './Todo.css';

const Todo = () => {
    const inputRef = useRef('');
    const [getON, setGetON] = useState(false);
    const [task, setTask] = useState([]);

    function handleDelete(index) {
        setTask(prev => {
            return prev.filter(item=>item!==task[index]);
        });
    }

    function moveUp(index){
        if(index>0){
         const updateTask =   [...task];
         [updateTask[index],updateTask[index-1]]=[updateTask[index-1],updateTask[index]];
         setTask(updateTask);
        }
    }
    function moveDown(index){
        if(index<task.length-1){
            const updateTask = [...task];
            [updateTask[index],updateTask[index+1]] = [updateTask[index+1],updateTask[index]]
            setTask(updateTask);
        }

    }
    function handleClick() {
        const task = inputRef.current.value;
        setTask(prev => {
            return [...prev, task];
        });
        inputRef.current.value = '';
        setGetON(true);
    }

    const element = task.map((task, index) => {
        return (
            <div className='task-list' key={index}>
                <p className='text'>{task}</p>
                <button onClick={() => handleDelete(index)} className='delete-button'>Delete</button>
                <button className='arrow-button' onClick={()=>{
                    moveUp(index);
                }}>☝🏻</button>
<button className='arrow-button' onClick={()=>{
    moveDown(index);
}}>👇🏻</button>
            </div>
        );
    });

    return (
        <div className='todo-parent'>
            <div className='heading'>TO-DO-LIST</div>
            <div className='col-1'>
                <input ref={inputRef} type="text" placeholder='Enter' className='input-box' />
                <button className='add-button' onClick={handleClick}>Add</button>
            </div>
            {getON && element}
        </div>
    );
};

export default Todo;
