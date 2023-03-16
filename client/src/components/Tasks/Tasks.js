import {useState, useRef, useEffect} from 'react'
import Task from "./Task";
import './Tasks.css'
import {useDispatch, useSelector} from 'react-redux'
import {rearrangeTasks} from '../../store/tasks'
import MyTasksMenu from './MyTasksMenu';
import CreateTask from './CreateTask';



const Tasks = props =>{  

    const [activeTask, setActiveTask] = useState(null) 
    const [tasks, setTasks] = useState([])
    const dispatch = useDispatch() 
    const dragItem = useRef();
    const dragOverItem = useRef();  

    const { selectedList } = useSelector(state => state.lists) 



    useEffect(()=>{
        if (selectedList.name == 'My Tasks'){
            let unlistedTasks = props.tasks.filter(task=>!task.list)
            setTasks(unlistedTasks)
        } else if (selectedList.name == 'Starred') {
            let favorited = props.tasks.filter(task=>task.favorited)
            setTasks(favorited)
        } else {
            setTasks(selectedList.tasks)
        }
    },[selectedList, props.tasks])
    

    let content
    if (tasks){
        
        const incompletedTasks = tasks.filter(task=>!task.completed).reverse() 


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
            <div className='mytasks__menu-container'>
                <MyTasksMenu />
                <div className='spacer' />
            </div>
            
            <div className='tasks__date'>Today</div>
            <CreateTask />
            <div className='tasks__list'>
                {content}
            </div> 

        </div>
    )
} 

export default Tasks;