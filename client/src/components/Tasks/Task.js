import {useState} from 'react'
import { Check, Trash } from 'react-bootstrap-icons';
import {completeTask} from '../../store/tasks'
import {useDispatch, useSelector} from 'react-redux'

const Task = props =>{ 
    const [active, setActive] = useState(false) 

    const dispatch = useDispatch()

    let taskClasses = 'task' 

    if(props.task.completed){
        taskClasses = 'task completed'
    } 

    let activeTaskClasses = 'task__active-container' 

    if(active && (props.activeTask === props.task.id)){
        activeTaskClasses = 'task__active-container active'
    } 



    let taskCheckboxClasses = 'task__checkbox'

    if (props.task.priority == 'Minor/low'){
        taskCheckboxClasses = 'task__checkbox p1'
    } else if(props.task.priority == 'Medium/moderate'){
        taskCheckboxClasses = 'task__checkbox p2'
    } else if(props.task.priority == 'Major/high'){
        taskCheckboxClasses = 'task__checkbox p3'
    } else if(props.task.priority == 'Critical/severe'){
        taskCheckboxClasses = 'task__checkbox p4'
    } 

    const handleCompleted = () =>{ 
        dispatch(completeTask(props.task.id)) 
    } 

    const handleActiveTask = () =>{
        setActive(!active)
        props.setActiveTask(props.task.id) 
    } 



    return(
        <div onClick={handleActiveTask} className={taskClasses}>
            <div className='task__container'>
                <div className='task__info-container'>
                    <div className='task__info'>
                        {props.task.completed ? <Check onClick={handleCompleted} /> : <div onClick={handleCompleted} className={taskCheckboxClasses} />}
                        <div className='task__todo'>
                            {props.task.task}
                            <div className='task__date'>{props.task.date}</div>
                        </div>
                    </div>
                
                <div className='task__category'>{props.task.category}</div>
                </div>
            </div>
            <div className={activeTaskClasses}>Active Container</div>
        </div>
    )
}
export default Task


{/* <div className='task__info'>
                    {props.task.completed ? <Check onClick={handleCompleted} /> : <div onClick={handleCompleted} className={taskCheckboxClasses} />}
                    <div className='task__todo'>
                        {props.task.task}
                        <div className='task__date'>{props.task.date}</div>
                    </div>
                </div>
                
                <div className='task__category'>{props.task.category}</div> */}