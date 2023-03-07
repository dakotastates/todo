
import {useDispatch} from 'react-redux'
import {createTask} from '../../store/tasks'
import { v4 as uuid } from 'uuid';

const CreateTask = props =>{

    const dispatch = useDispatch() 

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

    const handleNewTask = () =>{
        const unique_id = uuid();
        // const newObj = {...dataObj}
        const newObj= JSON.parse(JSON.stringify(dataObj))
        newObj.id = unique_id
        dispatch(createTask(newObj)) 
    }

    return(
    <div className='task'>  
        <div className='task__container' onClick={handleNewTask}> 
            <div className='task__info-container' >
                <div className='task__checkbox' />
                <div className='tasks__create'>Add a Task</div>
            </div>
        </div>
    </div>
    )
}
export default CreateTask