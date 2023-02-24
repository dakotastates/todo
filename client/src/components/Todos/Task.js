
const Task = props =>{
    return(
        <div className='task'>
            {/* <li> */}
            <div className='task__info'>
                <div className='task__checkbox'><input type='checkbox' /></div>
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