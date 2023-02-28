import {useDispatch, useSelector} from 'react-redux'
import Task from './Task'


const TasksDrawer = () =>{

    const { tasks } = useSelector(state => state.tasks) 
    
    let content
    if (tasks){
        const completedTasks = tasks.filter(task=>task.completed) 
        
        if (completedTasks.length > 0) {
            content = completedTasks?.map(task => (
                <Task key={task.id} task={task} />
                )
            )
        } else {
            content = <li>No Completed Tasks</li>
        }
        
    } 

    return(
        <div>
            <div className='right-side-drawer__text'>Completed Tasks</div>
            <div className='right-side_drawer__content'>
                <ul>
                    {content}
                </ul>
            </div>
        </div>
    )

}

export default TasksDrawer