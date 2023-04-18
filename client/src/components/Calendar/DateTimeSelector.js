import {useState, useRef, useEffect} from 'react'
import moment from 'moment';
import CalendarEventsForm from './CalendarEventsForm';


const DateTimeSelector = ({day, events})=>{
    const [toggleModal, setToggleModal] = useState(false)
    const [datetime, setDatetime] = useState(null)
    let today = new Date()


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

    // const timeslots = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM' ]
    const timeslots = []

    for (let index = 0; index < 24; index++) {

        let hour
        if(index< 10){
            hour = ("0" + index).slice(-2)
        }
        else{
             hour = index
        } 
        
        // const eventsFiltered = events?.filter(event=>hour == event.startTime.slice(0, -3) )
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



    const handleTimeSelect = (datetime) =>{
        setDatetime(datetime)
        handleOpenModal()
    }


    return(
        <>
            { timeslots?.map((slot, index)=>{
                let minSlots = []

                for (let index = 0; index < 60; index++) {

                    minSlots.push(index)
                }

                return(
                    <div key={index} className='calendar__timeslot-container'>

                        <div className='timeslot'>{slot.hour}</div>

                        {minSlots.map((minSlot, index)=>{
                            let timeslotDataClasses = 'calendar__timeslot-data'
                            if(minSlot == '0'){
                              timeslotDataClasses = 'calendar__timeslot-data show'
                            }
                            let datetime = new Date(slot.datetime)
                            datetime.setMinutes(minSlot)
                            

                            let todayMarker
                            if (slot.datetime.toDateString() == today.toDateString() && today.getHours() == slot.datetime.getHours() && today.getMinutes() == minSlot){
                                todayMarker = <div className='calendar__today-marker'/>
                            }
                        return(
                            <div className={timeslotDataClasses} onClick={()=>handleTimeSelect(datetime)} key={index}> 
                                {todayMarker}
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
            {toggleModal ? 
                <div  className="calendar__modal">
                    <div className="calendar__modal-content" ref={refModal}>
                    <CalendarEventsForm 
                        datetime={datetime}
                        handleOpenModal={handleOpenModal}
                    /> 
                    </div>
                </div>
                : null
            }
        </>
    )
} 

export default DateTimeSelector
