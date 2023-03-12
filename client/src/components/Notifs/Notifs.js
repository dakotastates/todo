// import {useEffect} from 'react'
import Notif from "./Notif"
import CreateNotif from "./CreateNotif"
import './Notifs.css'
// import { createNotif} from '../../store/notifs'
// import {useDispatch} from 'react-redux'

const Notifs = props =>{

    // const dispatch = useDispatch()
    
    // useEffect(()=>{
    //     dispatch(createNotif(props.task.notifs))
    // },[])
    
    return(
        <div>
            Task Notifications
            {props.task?.notifs.map((notif, index)=>(
                <Notif key={index} notif={notif} taskId={props.task.id} />
            )
            )}
           
            <CreateNotif taskId={props.task.id} />
        </div>

    )
}

export default Notifs