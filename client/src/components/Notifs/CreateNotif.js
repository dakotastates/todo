import { v4 as uuid } from 'uuid';
import {useDispatch} from 'react-redux'
import {createNotif} from '../../store/notifs'
import {createTaskNotif} from '../../store/tasks'

const CreateNotif = props =>{

    const dispatch = useDispatch() 

    const dataObj = {
        id: 1,
        type: 'alert', 
        taskId: props.taskId, 
        notif: ''
    }

    const handleNewNotif = () =>{
        const unique_id = uuid();

        const newObj= JSON.parse(JSON.stringify(dataObj))
        newObj.id = unique_id

        dispatch(createTaskNotif(newObj))
        // dispatch(createNotif(newObj))
    }

    return(
        <div>
            <div 
                className='notifs__create-button'
                onClick={handleNewNotif}
            >
                Add Notication
            </div>
        </div>
    )
}
export default CreateNotif