import {useState} from 'react'
import { Clock } from 'react-bootstrap-icons';


const CalendarEventsForm = ({setDate, setStartTime, setEndTime, date, startTime, endTime, setEndDate, endDate, handleOpenModal}) =>{
    const [title, setTitle] = useState('')
    const [allDay, setAllDay] = useState(false)

    const handleSubmit = () =>{
        const eventObj = {
            title: title, 
            date: date, 
            startTime: startTime, 
            endTime: endTime, 
            allDay: allDay, 
            endDate: endDate

        }
        console.log(eventObj)
    }

    return(
    <div className='calendar__form-container'>
        <div className='calendar__input-container'>
            <div className='calendar__form-input-container'>
                <div className='calendar__spacer' />
                <input className='calendar__form-title' type='text' placeholder='Add title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className='calendar__type-toggle-container'>
                <div className='calendar__spacer' />
                <div className='calendar__type-toggle-button'>Event</div>
                <div className='calendar__type-toggle-button'>Task</div>
                <div className='calendar__type-toggle-button'>Reminder</div>
            </div>
        </div>
        <div className='calendar__date-select-container'>
            <div className='calendar__date-select'>
                <div className='calendar__spacer'><Clock /></div>
                <div className='datetime-container'>
                    <div className='date'><input className='calendar__datetime-input' type='date' value={date} onChange={(e)=>setDate(e.target.value)} /></div>
                    {!allDay ? 
                    <>
                        <div className='time'><input className='calendar__datetime-input' type='time' value={startTime} onChange={(e)=>setStartTime(e.target.value)} /></div>
                        <div className='time'>- <input className='calendar__datetime-input' type='time' value={endTime} onChange={(e)=>setEndTime(e.target.value)} /></div>
                    </>
                    : 
                    <div className='date'> - <input className='calendar__datetime-input' type='date' value={endDate} onChange={(e)=>setEndDate(e.target.value)} /></div>
                    }
                </div>
            </div>
            <div className='calendar__form-checkbox'>
                <div className='calendar__spacer' />
                <div className='calendar__checkbox-lable-container'>
                    <input 
                        className='calendar__checkbox' 
                        type='checkbox' 
                        value={allDay} 
                        onChange={()=>setAllDay(!allDay)}
                    /> 
                    <label>All day</label>
                </div>
            </div>
        </div>
        <div className='calendar__form-buttons'>
            <div className='calendar__form-button' onClick={handleOpenModal}>Cancel</div>
            <div className='calendar__form-button submit' onClick={handleSubmit}>Done</div>
        </div> 
        
    </div>
    )
}

export default CalendarEventsForm