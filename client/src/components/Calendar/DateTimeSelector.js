import {useState, useRef, useEffect} from 'react'
import moment from 'moment';

const DateTimeSelector = ({day})=>{
    const [toggleModal, setToggleModal] = useState(false)
    const [datetime, setDatetime] = useState(null)
    const [date, setDate] = useState(null)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)


    const refModal = useRef(null) 

    const handleOpenModal = () =>{
        setToggleModal(!toggleModal)
    }

    const closeOpenModal = e =>{
        if(!refModal.current?.contains(e.target)){
            setToggleModal(false) 
        }
    } 

    useEffect(()=>{
        document.addEventListener('click', closeOpenModal, true)
    },[])  

    const timeslots = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM' ]
    
    const handleTimeSelect = (e, index) =>{
        let quarter 
        if(e.target.id == 1 ){
            quarter = '00'
        } else if (e.target.id == 2){
            quarter = '15'
        } else if (e.target.id == 3){
            quarter = '30'
        }else if (e.target.id == 4){
            quarter = '45'
        }

        let hour
        if(index< 10){
            hour = ("0" + index).slice(-2)
        }
        else{
             hour = index
        } 

        let date = day.slice(0, -14)
        
        let selectedDatetime = `${date}T${hour}:${quarter}`
        let startdatetime = new Date(selectedDatetime)
        let endDatetime = new Date(selectedDatetime)
        let newEndDatetime = new Date(addHours(endDatetime, 1))

        setDatetime(startdatetime)
        setDate(date)
        setStartTime(startdatetime.toLocaleTimeString("en-US", { hour12: false }))
        setEndTime(newEndDatetime.toLocaleTimeString("en-US", { hour12: false }))
        setToggleModal(true)
    }

    const addHours = (date, hours)=>{
        date.setHours(date.getHours() + hours);
        return date;
    }

    return(
        <>
        <div className='datetimeselector__container'>
            {
                timeslots.map((slot, index)=>{
                    return (
                        <div key={index} className='calendar__timeslot-container'>
                            <div className='calendar__timeslot' >
                                <div className='timeslot' id='1' onClick={(e)=>handleTimeSelect(e, index)}>{slot}</div>
                                <div className='calendar__timeslot-divider'>
                                    <div className='divider__inner' id='4' onClick={(e)=>handleTimeSelect(e, index)} /> 
                                    <div className='divider__inner2' id='1' onClick={(e)=>handleTimeSelect(e, index)} /> 
                                </div>
                            </div>
                            <div className='calendar__timeslot-data'> 
                                <div className='timeslot-quater' id='2' onClick={(e)=>handleTimeSelect(e, index)}></div>
                                <div className='timeslot-quater' id='3' onClick={(e)=>handleTimeSelect(e, index)}></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {toggleModal ? 
            <div  className="calendar__modal">
                <div className="calendar__modal-content" ref={refModal}>
                    <div className='calendar__form-container'>
                        <input className='calendar__form-title' type='text' placeholder='Add title' />
                        <div className='datetime-container'>
                            <div className='date'><input type='date' value={date} onChange={(e)=>setDate(e.target.value)} /></div>
                            <div className='time'><input type='time' value={startTime} onChange={(e)=>setStartTime(e.target.value)} /></div>
                            <div className='time'><input type='time' value={endTime} onChange={(e)=>setEndTime(e.target.value)} /></div>
                        </div>
                        <div><input type='checkbox' /> <label>All day</label></div>
                        <div className='calendar__form-buttons'>
                            <div className='calendar__form-button'>Cancel</div>
                            <div className='calendar__form-button submit'>Done</div>
                        </div>
                        
                    </div>

                </div>
            </div>
            : null
        }
        </>
    )
} 

export default DateTimeSelector
