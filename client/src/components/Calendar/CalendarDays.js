import {useEffect, useState} from 'react'
import { useSelector} from 'react-redux'

const CalendarDays = props =>{
    let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1)
    let weekdayOfFirstDay = firstDayOfMonth.getDay(); 
    let currentDays = [] 

    const [loading, setLoading] = useState(false)


    const { events } = useSelector(state => state.calendar)
    

    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) { 
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        } else {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        } 
        
        const dayEvents = events.filter(event => JSON.stringify(firstDayOfMonth).slice(0, -14) >= JSON.stringify(event.startDate).slice(0, -14) && JSON.stringify(firstDayOfMonth).slice(0, -14) <= JSON.stringify(event.endDate).slice(0, -14)) 
        // const e = events.filter(event => {
        //   // console.log(JSON.stringify(firstDayOfMonth))
        //   console.log(event.title, event.startDate.slice(0, -14))
        //   // return JSON.stringify(firstDayOfMonth) == JSON.stringify(event.startDate) 

        // }) 
        // console.log(e)

        
        let calendarDay = {
          currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
          date: (new Date(firstDayOfMonth)),
          month: firstDayOfMonth.getMonth(),
          number: firstDayOfMonth.getDate(),
          selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
          year: firstDayOfMonth.getFullYear(), 
          events: dayEvents
        }


        currentDays.push(calendarDay);
      } 
      // console.log('currentdays',currentDays[9].events)
      // useEffect(()=>{
      //   console.log('currentdays',currentDays[9].events)
      // },[events])
      

      useEffect(()=>{
        const today = currentDays.filter(day => day.date.toDateString() == props.day.toDateString())

        if(today){
          setLoading(true)
        }
        // const today = currentDays.filter(day => day.date.toDateString() == props.day.toDateString())
        // const today = currentDays.reduce((res, day) =>  {
        //   if  (day.date.toDateString() == props.day.toDateString()){
        //     return day
        //   }
        // })

          props.changeCurrentDay(today[0])
      },[loading, events])
      

    return(
        <div className='calendar__table-content'>
            {
            currentDays.map((day, index) => {
              
              // if (day.date.toDateString() == props.day.toDateString()){
              //   // props.changeCurrentDay(day)
              //   setToday(day)
              // }
              // console.log(day.events)
                return (
                <div key={index} className={"calendar__day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
                        onClick={() => props.changeCurrentDay(day)}>
                    <p>{day.number}</p>
                    
                    <div className='calendar__on-event-container'>
                      {day.events.map((event, index)=>(
                        <div className='calendar__on-event' key={index}>{event.title}</div>
                      ))}
                    </div>
                </div>
                )
            })
            }
        </div>
    )
}

export default CalendarDays