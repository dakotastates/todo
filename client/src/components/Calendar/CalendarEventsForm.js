import {useState, useEffect} from 'react'
import { Clock } from 'react-bootstrap-icons';
import {useDispatch} from 'react-redux'
import {createEvent} from '../../store/calendar'


const CalendarEventsForm = ({datetime, handleOpenModal}) =>{
    const [title, setTitle] = useState('')
    const [allDay, setAllDay] = useState(false)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    const dispatch = useDispatch()

    const addHours = (date, hours)=>{
        date.setHours(date.getHours() + hours);
        return date;
    } 

    useEffect(()=>{
        let getYear = datetime.toLocaleString("default", { year: "numeric" });
        let getMonth = datetime.toLocaleString("default", { month: "2-digit" });
        let getDay = datetime.toLocaleString("default", { day: "2-digit" });
        let dateFormat = getYear + "-" + getMonth + "-" + getDay;

        let st = datetime.toLocaleTimeString("en-US", { hour12: false })
        let et = new Date(addHours(datetime, 1))
        
        setStartDate(dateFormat)
        setEndDate(dateFormat)
        setStartTime(st)
        setEndTime(et.toLocaleTimeString("en-US", { hour12: false }))
    },[])

    
    const handleSubmit = () =>{

        const eventObj = {
            title: title, 
            startDate: `${startDate}T${startTime}.000Z`, 
            endDate: `${endDate}T${startTime}.000Z`,
            startTime: `${startDate}T${startTime}`, 
            endTime: `${startDate}T${endTime}`
            

        }
        dispatch(createEvent(eventObj)).then(()=>{
            handleOpenModal()
        })
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
                    <div className='date'><input className='calendar__datetime-input' type='date' value={startDate} onChange={(e)=>setStartDate(e.target.value)} /></div>
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