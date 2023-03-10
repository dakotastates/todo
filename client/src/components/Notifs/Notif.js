import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {updateTaskNotif} from '../../store/tasks'
import {updateNotif, createNotif} from '../../store/notifs'

const Notif = props =>{
    const [notif, setNotif] = useState(props.notif)

    const dispatch = useDispatch() 

    // useEffect(()=>{
    //     dispatch(createNotif(notif))
    // },[])

    const handleSubmit = e =>{
        console.log(notif)
        const notifObj = {
            id: notif.id,
            taskId: props.taskId, 
            notif: notif, 
            type: notif.type
        }
        dispatch(updateTaskNotif(notifObj))
        dispatch(updateNotif(notifObj))
        dispatch(createNotif(notifObj))
    }

    return(
    <div>
        <li>
            <select
                defaultValue={notif ? notif.notif : '30 minutes before'}
                onChange={e=>setNotif(e.target.value) }
                onBlur={handleSubmit}
            >
                <option>5 minutes before</option>
                <option>10 minutes before</option>
                <option>15 minutes before</option>
                <option>30 minutes before</option>
                <option>1 hour before</option>
                <option>1 day before</option>
                <option>custom</option>
            </select>
        </li>
    </div>
    )
}

export default Notif