import {useState, useRef, useEffect} from 'react'
import Task from "./Task";
import './Tasks.css'
import {useDispatch, useSelector} from 'react-redux'
import {rearrangeTasks} from '../../store/tasks'
import MyTasksMenu from './MyTasksMenu';
import CreateTask from './CreateTask';



const Tasks = props =>{  

    const [activeTask, setActiveTask] = useState(null) 
    const dispatch = useDispatch() 
    const dragItem = useRef();
    const dragOverItem = useRef(); 
    

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

    return(
        <div className='tasks-container'>
            <MyTasksMenu />
            <div className='tasks__date'>Today</div>
            <CreateTask />
            <div className='tasks__list'>
                {content}
            </div> 

        </div>
    )
} 

export default Tasks;