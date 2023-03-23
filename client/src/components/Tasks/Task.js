import {useState, useRef, useEffect} from 'react'
import { Check, Trash, Star, StarFill, ThreeDotsVertical, NutFill } from 'react-bootstrap-icons';
import {completeTask, updateTask, deleteTask} from '../../store/tasks'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import Notifs from '../Notifs/Notifs'
import TaskDropdownMenu from './TaskDropdownMenu';
import {setSelectedList} from '../../store/lists'


const Task = props =>{ 
    const [active, setActive] = useState(false)  
    const [taskTitle, setTaskTitle] = useState(props.task.title)
    const [taskCategory, setTaskCategory] = useState(props.task.category)
    const [customCategory, setCustomCategory] = useState(false)
    const [taskDateTime, setTaskDateTime] = useState(props.task.alert_datetime)
    const [toggleDateTime, setToggleDateTime] = useState(false)
    const [taskDetails, setTaskDetails] = useState(props.task.details)
    const [taskPriority, setTaskPriority] = useState(props.task.priority)
    const refOne = useRef(null)
    const params = useParams();
    const navigate = useNavigate();
    

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
        dispatch(completeTask(props.task.id)).then(()=>{
            navigate('/tasks')
        }) 
    } 

    const handleActiveTask = () =>{ 
        props.setActiveTask(props.task.id) 
        navigate(`/tasks/${props.task.uuid}`)
    }   

    useEffect(()=>{
        document.addEventListener('click', handleClickOutside, true)
    },[]) 

    useEffect(()=>{
        if(params?.id == props.task.uuid){
            // dispatch(setSelectedList(props.task.list))
            props.setActiveTask(props.task.id)
            setActive(true)
        }
    },[params])
    
    const handleClickOutside = e => {
        if(!refOne.current?.contains(e.target)) {
            setActive(false)
            setToggleDateTime(false)
            navigate('/tasks')
        } 

    } 

    const handleSubmit = e =>{
        e.preventDefault() 
        setToggleDateTime(false)
        
        const taskObj = {
            id: props.task.id,
            uuid: props.task.uuid,
            alert_datetime: taskDateTime,
            title: taskTitle, 
            category: taskCategory, 
            priority: taskPriority, 
            completed: props.task.completed, 
            details: taskDetails, 
            user_id: props.task.user_id,
            favorited: props.task.favorited
        }

        if(props.task !== taskObj ){
            dispatch(updateTask(taskObj)) 
        }
    } 

    const handleCategoryChange = e =>{
        if(e.target.value == 'custom'){
            setCustomCategory(true)
            setTaskCategory('')
        } else{
            setTaskCategory(e.target.value) 
            setCustomCategory(false)
        }
    } 

    let categoryCustomClasses = 'task__category-custom'

    if(customCategory){
        categoryCustomClasses = 'tast__category-custom selected'
    } 

    const handleDeleteTask = e =>{
        dispatch(deleteTask(props.task.id)) 
    } 

    const handleFavorited = ()=>{
        const taskObj = {
            id: props.task.id,
            favorited: !props.task.favorited
        } 

        dispatch(updateTask(taskObj)) 
    }

    

    return(
        <div ref={refOne} onClick={handleActiveTask} className={taskClasses} >
            
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
                                : props.task.title
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
                                    {props.task.alert_datetime ? <div className='task__date-inactive'>{moment(props.task.alert_datetime ).calendar()} </div> : 'Date/Time'}
                                </div>
                                }

                            </div>
                            :
                            props.task.alert_datetime ? <div className='task__date-inactive'>{moment(props.task.alert_datetime ).calendar()} </div>: null
                        }
                        </div>
                    </div>
                </div>
                <div className='task__options-container'>
                    <div className='task__options'>
                        <div className='task__option-item'><Trash className='task__trash' onClick={handleDeleteTask}/></div>
                        <div className='task__option-item' onClick={handleFavorited}>{props.task.favorited ? <div className='task__favorited'><StarFill /> </div>: <Star />}</div>
                        <div className='task__option-item'><TaskDropdownMenu task={props.task} /></div>
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
                        <div>
                        {active ? 
                            <div className='task__right-container'>
                                <select 
                                    defaultValue={taskPriority}
                                    onChange={e=>setTaskPriority(e.target.value) }
                                    className='task__category-select'
                                    onBlur={handleSubmit}
                                >
                                    <option value=''>Priority</option>
                                    <option value='Minor/low'>Minor/low</option>
                                    <option value='Medium/moderate'>Medium/moderate</option>
                                    <option value='Major/high'>Major/high</option>
                                    <option value='Critical/severe'>Critical/severe</option>
                                </select>

                            </div>
                            :   <div className='task__right-container'>
                                    <div>{props.task.priority}</div>
                                </div>
                        }
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className={activeTaskClasses}>
                Active
            </div>
        </div>
    )
}
export default Task


{/* <Notifs task={props.task} /> */}