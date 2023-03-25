import Calendar from "../components/Calendar/Calendar"
import "../components/Calendar/Calendar.css"

const CalendarPage = () =>{ 

    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobor', 'November', 'December']

    const currentDay = new Date() 


    return(
        <div className='calendar'>
            <div className='calendar__header'>
                <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
            </div>
        <Calendar />
        </div>
    )

}

export default CalendarPage