import {useState, useEffect} from 'react'; 
import CalendarDays from './CalendarDays';
import {setSelectedDay} from '../../store/calendar'
import {useDispatch, useSelector} from 'react-redux'

const Calendar = () =>{
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobor', 'November', 'December']

    const [currentDay, setCurrentDay] = useState(new Date() )

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setSelectedDay(currentDay))
    },[currentDay])
    

    const changeCurrentDay = (day) =>{
        // dispatch(setSelectedDay(day))
        
        setCurrentDay(new Date(day.year, day.month, day.number))
    }

    return(
        <div className='calendar'>
            <div className='calendar__header'>
                <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
            </div>
            <div className='calendar__body'>
                <div className='calendar__table-header'>
                    {
                        weekdays.map((weekday, index)=>{
                            return <div key={index} className='calendar__weekday'><p>{weekday}</p></div>
                        })
                    }
                </div>
                <div className='calendar__table'>
                    <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
                </div>
            </div>
        </div>
    )

}

export default Calendar