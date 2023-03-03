import {useState, useRef, useEffect} from 'react'
import { Check, Trash, Star, ThreeDotsVertical } from 'react-bootstrap-icons';
import {completeTask, updateTask, deleteTask} from '../../store/tasks'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment';

const Task = props =>{ 
    const [active, setActive] = useState(false)  
    const [taskTitle, setTaskTitle] = useState(props.task.task)
    const [taskCategory, setTaskCategory] = useState(props.task.category)
    const [customCategory, setCustomCategory] = useState(false)
    const [taskDateTime, setTaskDateTime] = useState(props.task.date)
    const [toggleDateTime, setToggleDateTime] = useState(false)
    // const [toggleTaskDetails, setToggleTaskDetails] = useState(false)
    const [taskDetails, setTaskDetails] = useState(props.task.details)
    // const [showOptions, setShowOptions] = useState(false)

    const refOne = useRef(null)

    const dispatch = useDispatch() 

    // let taskOptionsClasses = 'task__options'

    // if(showOptions){
    //     taskOptionsClasses = 'task__options show'
    // }

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
        props.setActiveTask(props.task.id) 
    }   

    useEffect(()=>{
        document.addEventListener('click', handleClickOutside, true)
    },[])
    
    const handleClickOutside = e => {
        if(!refOne.current.contains(e.target)) {
            setActive(false)
            // setToggleTaskDetails(false)
            // setToggleDateTime(false)
            // console.log('Outside')
        } else {
            // console.log('clicked inside')
            // setActive(true)
            // console.log('Inside')
        }

    } 

    const handleSubmit = e =>{
        e.preventDefault() 
        setToggleDateTime(false)
        
        const taskObj = {
            id: props.task.id, 
            date: taskDateTime,
            task: taskTitle, 
            category: taskCategory, 
            priority: props.task.priority, 
            completed: props.task.completed, 
            details: taskDetails
        }
        // debugger
        if(props.task !== taskObj ){
            dispatch(updateTask(taskObj)) 
        }
    } 

    const handleCategoryChange = e =>{
        if(e.target.value == 'custom'){
            // console.log('custom selected')
            setCustomCategory(true)
            setTaskCategory('')
        } else{
            setTaskCategory(e.target.value) 
            setCustomCategory(false)
            // console.log('selected', e.target.value)
        }
    } 

    let categoryCustomClasses = 'task__category-custom'

    if(customCategory){
        categoryCustomClasses = 'tast__category-custom selected'
    } 

    const handleDeleteTask = e =>{
        dispatch(deleteTask(props.task.id)) 
    }



    return(
        <div 
            ref={refOne} 
            onClick={handleActiveTask} 
            className={taskClasses} 
        >
            
            <div className='task__container'>
                
                <div className='task__info-container' onClick={()=>setActive(true)}>
                {props.task.completed ? <Check onClick={handleCompleted} /> : <div onClick={handleCompleted} className={taskCheckboxClasses} />}
                    <div className='task__c'>
                        <div className='task__info'>
                            {active ? 
                                <input 
                                    className='task__input' 
                                    placeholder='Title'
                                    autoFocus 
                                    onFocus={e=>e.target.select()} 
                                    type='text' value={taskTitle} 
                                    onChange={e=>setTaskTitle(e.target.value)}
                                    onBlur={handleSubmit}
                                /> 
                                : props.task.task
                            }  
                        </div>
                        <div>
                            {active ?
                                <input 
                                    type='text' 
                                    value={taskDetails}
                                    placeholder='Details'
                                    onChange={e=>setTaskDetails(e.target.value)} 
                                    onBlur={handleSubmit}
                                />
                                :
                                props.task.details
                            }
                        </div>
                        <div>
                        {active ?
                            <div>
                                {toggleDateTime ?       
                                <input 
                                    type='datetime-local' 
                                    value={taskDateTime}
                                    onChange={e=>setTaskDateTime(e.target.value)} 
                                    onBlur={handleSubmit}
                                /> : 
                                <div onClick={()=>setToggleDateTime(true)}>
                                    {props.task.date ? <div className='task__date-inactive'>{moment(props.task.date ).calendar()} </div> : 'Date/Time'}
                                </div>
                                }

                            </div>
                            :
                            props.task.date ? <div className='task__date-inactive'>{moment(props.task.date ).calendar()} </div>: null
                        }
                        </div>
                    </div>
                </div>
                <div className='task__options-container'>
                    <div className='task__options'>
                        <div className='task__option-item'><Trash className='task__trash' onClick={handleDeleteTask}/></div>
                        <div className='task__option-item'><Star /></div>
                        <div className='task__option-item'><ThreeDotsVertical /></div>
                    </div>
                    <div className='task__cp'>
                        <div className='task__category'>
                        {active ? 
                            <div className='task__right-container'>
                                <select 
                                    defaultValue={customCategory ? 'custom' : taskCategory}
                                    onChange={handleCategoryChange}
                                    className='task__category-select'
                                    onBlur={handleSubmit}
                                >
                                    <option value=''>Category</option>
                                    <option value='personal'>Personal</option>
                                    <option value='work'>Work</option>
                                    <option value='custom'>Custom</option>
                                </select>
                                <div className={categoryCustomClasses}>
                                    <input 
                                        type='text' 
                                        placeholder='Custom Category' 
                                        // value={taskCategory} 
                                        onChange={e=>setTaskCategory(e.target.value)}
                                        onBlur={handleSubmit}
                                    />
                                
                                </div>
                            </div>
                            :   <div className='task__right-container'>
                                    <div>{props.task.category}</div>
                                </div>
                        }
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className={activeTaskClasses}>
            <div className='task__priority'>{props.task.priority}</div>
            </div>
        </div>
    )
}
export default Task