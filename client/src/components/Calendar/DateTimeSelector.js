import {useState, useRef, useEffect} from 'react'
import moment from 'moment';
import CalendarEventsForm from './CalendarEventsForm';
// import { Clock } from 'react-bootstrap-icons';


const DateTimeSelector = ({day, events})=>{
    const [toggleModal, setToggleModal] = useState(false)
    const [datetime, setDatetime] = useState(null)
    const [date, setDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
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

    const timeslots = []

    for (let index = 0; index < 24; index++) {

        let hour
        if(index< 10){
            hour = ("0" + index).slice(-2)
        }
        else{
             hour = index
        } 
        
        const eventsFiltered = events?.filter(event=>{
            let st = new Date(event.startTime)
            let startTime = st.getHours()
            startTime = ("0" + startTime).slice(-2)
            return hour == startTime
        } )


        let datetime = new Date(day)
        datetime.setHours(hour)

        let timeslotObj={
            datetime: datetime, 
            day: day,
            hour: datetime.toLocaleTimeString(navigator.language, {hour: 'numeric'}),
            events: eventsFiltered
        }

        timeslots.push(timeslotObj)
    }

    const handleTimeSelect = (hour, min) =>{
        console.log(min)
        // let quarter 
        // if(e.target.id == 1 ){
        //     quarter = '00'
        // } else if (e.target.id == 2){
        //     quarter = '15'
        // } else if (e.target.id == 3){
        //     quarter = '30'
        // }else if (e.target.id == 4){
        //     quarter = '45'
        // }

        // let hour
        // if(index< 10){
        //     hour = ("0" + index).slice(-2)
        // }
        // else{
        //      hour = index
        // } 

        // let date = day.slice(0, -14)
        
        // let selectedDatetime = `${date}T${hour}:${quarter}`
        // let startdatetime = new Date(selectedDatetime)
        // let endDatetime = new Date(selectedDatetime)
        // let newEndDatetime = new Date(addHours(endDatetime, 1))
        

        // setDatetime(startdatetime)
        // setDate(date)
        // setEndDate(date)
        // setStartTime(startdatetime.toLocaleTimeString("en-US", { hour12: false }))
        // setEndTime(newEndDatetime.toLocaleTimeString("en-US", { hour12: false }))
        // handleOpenModal()
    }

    // const addHours = (date, hours)=>{
    //     date.setHours(date.getHours() + hours);
    //     return date;
    // } 

    // if(events){
    //     // console.log(events[0])
    // }

    return(
        <>
            { timeslots?.map((slot, index)=>{
                let minSlots = []

                for (let index = 0; index < 60; index++) {

                    minSlots.push(index)
                }
                // console.log('min', minSlots)

                return(
                    <div key={index} className='calendar__timeslot-container'>

                        <div className='timeslot'>{slot.hour}</div>

                        {minSlots.map((minSlot, index)=>{
                            let timeslotDataClasses = 'calendar__timeslot-data'
                            if(minSlot == '0'){
                              timeslotDataClasses = 'calendar__timeslot-data show'
                            }
                        return(
                            <div className={timeslotDataClasses} onClick={()=>handleTimeSelect(slot.hour, minSlot)} key={index}> 

                            </div>
                        )})}

                        {slot.events?.map((event, index)=> {
                            let startTime = new Date(event.startTime)
                            let endTime = new Date(event.endTime)
                            let timeDiff = (endTime - startTime)
                            let diffMins = Math.floor(timeDiff / 60000) 
                            let startMins = startTime.getMinutes()
                        return (
                            <div 
                                className='calendar__slot-event'  
                                key={(index)}
                                style={{ top: `${startMins}px`, color: 'blue', height: `${diffMins}px`}}
                            >
                                {event.title}
                            </div>
                        )})}

                    </div>
                    
            )})}
        </>
    )
} 

export default DateTimeSelector



// {slot.events?.map((event, index)=>(
//     <div key={(index)}>{event.title}</div>
// ))}

{/* <>
<div className='datetimeselector__container'>
    {
        timeslots.map((slot, index)=>{
            // const eventTimes = events.filter(event => {
            //     // console.log('endtime',event.endTime.slice(0, -3))
            //     // console.log('starttime',event.startTime.slice(0, -3))
            //     // console.log(event.endTime)
            //     // console.log(event.startTime)
                // let hour
                // if(index< 10){
                //     hour = ("0" + index).slice(-2)
                // }
                // else{
                //      hour = index
                // } 

            //    return hour >= event.startTime.slice(0, -3) && hour <= event.endDate.slice(0, -3)
            // //    return event.startTime >= hour  && event.endDate <= hour

            // }) 
            
            // console.log(eventTimes.length)
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
            <CalendarEventsForm 
                setDate={setDate} 
                setStartTime={setStartTime} 
                setEndTime={setEndTime} 
                setEndDate={setEndDate}
                date={date} 
                startTime={startTime} 
                endTime={endTime}
                endDate={endDate}
                handleOpenModal={handleOpenModal}
            />
        </div>
    </div>
    : null
}
</> */}