import { Check } from 'react-bootstrap-icons';

const Task = props =>{ 

    let taskClasses = 'task'

    if(props.task.completed){
        taskClasses = 'task completed'
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

    return(
        <div className={taskClasses}>
            {/* <li> */}
            <div className='task__info'>
                {props.task.completed ? <Check /> : <div className={taskCheckboxClasses} />}
                <div className='task__todo'>
                    {props.task.task}
                    <div className='task__date'>{props.task.date}</div>
                </div>
            </div>
             <div className='task__category'>{props.task.category}</div>
             {/* </li> */}
        </div>
    )
}
export default Task