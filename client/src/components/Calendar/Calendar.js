import {useState} from 'react'; 
import CalendarDays from './CalendarDays';

const Calendar = () =>{
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobor', 'November', 'December']

    const [currentDay, setCurrentDay] = useState(new Date() )

    const changeCurrentDay = (day) =>{
        setCurrentDay(new Date(day.year, day.month, day.number))
    }

    return(
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
    )

}

export default Calendar