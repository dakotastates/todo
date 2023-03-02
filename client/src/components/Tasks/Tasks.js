import {useState} from 'react'
import Task from "./Task";
import './Tasks.css'
import Backdrop from '../Backdrop/Backdrop';



const Tasks = props =>{  

    const [activeTask, setActiveTask] = useState(null) 

    let content
    if (props.tasks){
        const incompletedTasks = props.tasks.filter(task=>!task.completed) 
        
        if (incompletedTasks.length > 0) {
            content = incompletedTasks?.map(task => (
                <Task key={task.id} activeTask={activeTask} setActiveTask={setActiveTask} task={task} />
                )
            )
        } else {
            content = "No Tasks"
        }
        
    } 


    return(
        <div className='tasks-container'>
            <div className='tasks__date'>Today</div>
            <div className='tasks__create'>Add a Task</div>
            <div className='tasks__list'>
                {content}
            </div> 

        </div>
    )
} 

export default Tasks;