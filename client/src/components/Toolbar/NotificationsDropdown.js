// import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {getNotifs} from '../../store/notifs'

const NotificationsDropdown = ()=>{

    // const dispatch = useDispatch()
    const { notifs } = useSelector(state => state.notifs) 


    // useEffect(()=>{
    //     dispatch(getNotifs()) 
    // },[])


    return(
        <div className='toolbar__notifs-container'>
            Notifications
            <ul>
            {notifs ? 
                notifs.map((notif, index)=>(
                    <li key={index}>{notif.notif}</li>
                ))
            : 'No Notifications'
            }
            </ul>
        </div>
    )
}
export default NotificationsDropdown