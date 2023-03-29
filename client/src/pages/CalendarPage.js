import {useEffect} from 'react'
import Calendar from "../components/Calendar/Calendar"
import "../components/Calendar/Calendar.css"
import { useDispatch, useSelector} from 'react-redux'
import {getEvents} from '../store/calendar'

const CalendarPage = () =>{ 

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getEvents())
    },[])

    
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobor', 'November', 'December']

    // const currentDay = new Date() 


    return(
        <div className='calendar__container'>
        <Calendar />
        </div>
    )

}

export default CalendarPage