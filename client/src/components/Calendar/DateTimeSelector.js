
const DateTimeSelector = ()=>{
    const timeslots = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM' ]

    return(
        <div className='datetimeselector__container'>
            {
                timeslots.map((slot, index)=>{
                    return (
                        <div key={index} className='calendar__timeslot-container'>
                            <div className='calendar__timeslot' >
                                <div className='timeslot' id='1' onClick={(e)=> console.log(e.target.id)}>{slot}</div>
                                <div className='calendar__timeslot-divider'>
                                    <div className='divider__inner' id='4' onClick={(e)=> console.log(e.target.id)} /> 
                                    <div className='divider__inner2' id='1' onClick={(e)=> console.log(e.target.id)} /> 
                                </div>
                            </div>
                            <div className='calendar__timeslot-data'> 
                                <div className='timeslot-quater' id='2' onClick={(e)=> console.log(e.target.id)}></div>
                                <div className='timeslot-quater' id='3' onClick={(e)=> console.log(e.target.id)}></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
} 

export default DateTimeSelector