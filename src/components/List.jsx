import React from 'react'
import Todo from './Todo.JSX'
const List = (props) => {
    
    function handleDelete(index){
    
    }
  return (
    <div className='task-list'>
    <p className='text'>{props.name}</p>
<button>Delete</button>
<button>☝🏻</button>
<button>👇🏻</button>

   </div>
  )
}

export default List
