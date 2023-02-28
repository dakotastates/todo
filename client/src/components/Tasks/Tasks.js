import Task from "./Task";
import './Tasks.css'



const Tasks = props =>{  



    return(
        <div className='tasks-container'>
            <div className='tasks__date'>Today</div>
            <div className='tasks__list'>
                 {props.tasks.map(task => (
                    <Task key={task.id} task={task} />
                 ))}
            </div> 

        </div>
    )
} 

export default Tasks;