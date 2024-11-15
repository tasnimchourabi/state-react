import React from 'react'
import TaskCard from './TaskCard'

const TaskList = ({tasks,del,edit,comp}) => {
  return (
    <div className='card-container'>
      {tasks.map((el, index)=>(
        <TaskCard el={el} key={el.id} index={index} del={del} edit={edit} comp={comp}/>
      ))}
    </div>
  )
}

export default TaskList
