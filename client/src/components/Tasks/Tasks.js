import {useState, useRef} from 'react'
import Task from "./Task";
import './Tasks.css'
import { v4 as uuid } from 'uuid';
import {useDispatch, useSelector} from 'react-redux'
import {createTask, rearrangeTasks} from '../../store/tasks'
// import Backdrop from '../Backdrop/Backdrop';



const Tasks = props =>{  

    const [activeTask, setActiveTask] = useState(null) 
    const dispatch = useDispatch() 
    const dragItem = useRef();
    const dragOverItem = useRef();
    


    const dataObj = {
            id: 1,
            date: '' ,
            task: '',
            category: '',
            completed: false, 
            details: '', 
            priority: '',
            onCalendar: false,
            favorited: false,
            repeat: false,
            associates: []
        }




    let content
    if (props.tasks){
        const incompletedTasks = props.tasks.filter(task=>!task.completed).reverse() 


        const dragStart = (e, position) => {
            dragItem.current = position;
        };

        const dragEnter = (e, position) => {
            dragOverItem.current = position;
        };

        const drop = (e) => {
            const copyListItems = [...incompletedTasks];
            const dragItemContent = copyListItems[dragItem.current];
            copyListItems.splice(dragItem.current, 1);
            copyListItems.splice(dragOverItem.current, 0, dragItemContent);
            dragItem.current = null;
            dragOverItem.current = null;
            dispatch(rearrangeTasks(copyListItems)) 
        };
    
        
        if (incompletedTasks.length > 0) {
            content = incompletedTasks?.map((task, index) => (
                <div
                    key={index}
                    onDragStart={(e) => dragStart(e, index)}
                    onDragEnter={(e) => dragEnter(e, index)}
                    onDragEnd={drop}
                    draggable
                >
                    <Task 
                        key={task.id} 
                        activeTask={activeTask} 
                        setActiveTask={setActiveTask} 
                        task={task}
                    />
                </div>
                )
            )
        } else {
            content = "No Tasks Yet"
        }
        
    }  

    const handleNewTask = () =>{
        const unique_id = uuid();
        // const newObj = {...dataObj}
        const newObj= JSON.parse(JSON.stringify(dataObj))
        newObj.id = unique_id
        dispatch(createTask(newObj)) 
    }


    return(
        <div className='tasks-container'>
            <div className='tasks__date'>Today</div>
            
            <div className='task'>
            
                <div className='task__container' onClick={handleNewTask}> 
                    <div className='task__info-container' >
                        <div className='task__checkbox' />
                        <div className='tasks__create'>Add a Task</div>
                    </div>
                </div>
            </div>
            <div className='tasks__list'>
                {content}
            </div> 

        </div>
    )
} 

export default Tasks;










