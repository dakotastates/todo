import {useState, useEffect} from 'react'
import Task from "./Task";
import './Tasks.css'

import {useDispatch, useSelector} from 'react-redux'
import {getTasks} from '../../store/tasks'

const Tasks = props =>{  

    const dispatch = useDispatch()
    const { tasks } = useSelector(state => state.tasks) 

    if (tasks) {
        console.log('tasks:',tasks)
      }

    useEffect(()=>{
        dispatch(getTasks())
    },[])

    return(
        <div className='tasks-container'>
            <div className='tasks__date'>Today</div>
            <div className='tasks__list'>
                 {tasks.map(task => (
                    <Task key={task.id} task={task} />
                 ))}
            </div> 

        </div>
    )
} 

export default Tasks;