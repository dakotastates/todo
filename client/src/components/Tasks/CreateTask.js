
import {useDispatch, useSelector} from 'react-redux'
import {createTask} from '../../store/tasks'
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

const CreateTask = props =>{

    const dispatch = useDispatch() 
    const navigate = useNavigate();

    const { selectedList } = useSelector(state => state.lists)
    
    const dataObj = {
        alert_datetime: '',
        title: '',
        category: '',
        details: '', 
        priority: '', 
        uuid: '', 
        list_task_attributes: {
            list_id: selectedList?.id
        }
    } 

    const handleNewTask = () =>{
        const unique_id = uuid();

        const newObj= JSON.parse(JSON.stringify(dataObj))
        newObj.uuid = unique_id
        dispatch(createTask(newObj)).then(()=>{
            navigate(`/tasks/${newObj.uuid}`)
        })
        
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