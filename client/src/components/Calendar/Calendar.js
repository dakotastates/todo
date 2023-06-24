import { useState, useEffect } from 'react';
import {setSelectedDay} from '../../store/calendar'
import {useDispatch, useSelector} from 'react-redux'

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const dispatch = useDispatch()
    const { events } = useSelector(state => state.calendar)


    const changeCurrentDay = (day) =>{ 
        dispatch(setSelectedDay(day)).then(()=>{
            setCurrentDate(new Date(day.date))
        })
    }

    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const today = daysArray.filter(day => day.date.toDateString() == currentDate.toDateString())

        if(today){
          setLoading(true)
        }


        changeCurrentDay(today[0])
      },[loading, events])

  const getDaysArray = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInLastMonth = new Date(year, month, 0).getDate();
    const arrayLength = 42;
    const daysArray = [];

    let day = 1;
    let lastMonthDay = daysInLastMonth - firstDay + 1;
    let nextMonthDay = 1; 


    for (let i = 0; i < arrayLength; i++) {
      let date;
      let isCurrentMonth = true;

      if (i < firstDay) {
        date = new Date(year, month - 1, lastMonthDay);
        lastMonthDay++;
        isCurrentMonth = false;
      } else if (i >= firstDay + daysInMonth) {
        date = new Date(year, month + 1, nextMonthDay);
        nextMonthDay++;
        isCurrentMonth = false;
      } else {
        date = new Date(year, month, day);
        day++;
      }

    const dayEvents = events.filter(event => {
        
        const startDate = new Date(event.startDate);
        const endDate = new Date(event.endDate);
         if(date >= startDate && date <= endDate){
            return event
         }
        
    }) 

      const calendarDay = {
        date: date, 
        isCurrentMonth: isCurrentMonth, 
        dayOfWeek: date.getDay(),
        selected: (date.toDateString() === currentDate.toDateString()),
        events: dayEvents, 
        slots: Array(4).fill()
      }

      daysArray.push(calendarDay);
    }

    return daysArray;
  };
  


  const daysArray = getDaysArray(currentDate);

  const prevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
  };

  let renderEvents = (startDate, endDate, day, event, index) =>{

    let diffTime = Math.abs(endDate - startDate)
    let diffDays = Math.ceil((diffTime / (1000 * 60 * 60 * 24)) ) 
    // console.log('index', index)
    const style = {
        top: `${(index * 20) + 20}px`,
        // left: `${((startDate.getDay() - 1) * 14) + 30}px`,
        width: `${((endDate.getDay() - startDate.getDay()) + 1) * 100}%`,
        // width: `${(diffDays)*100}%`, 
        
      };

      let eventClasses
      if (JSON.stringify(day.date)?.slice(0,-15)==JSON.stringify(event.startDate)?.slice(0,-15) || day.dayOfWeek == 0){
        eventClasses = 'calendar__on-event'
      }
    
    // if (JSON.stringify(day.date)?.slice(0,-15)==JSON.stringify(event.startDate)?.slice(0,-15) || day.dayOfWeek == 0){
        return (
            <div 
                key={index} 
                className={eventClasses}
                style={style}
            >
                {/* {event.title} */}
                {(JSON.stringify(day.date)?.slice(0,-15)==JSON.stringify(event.startDate)?.slice(0,-15) || day.dayOfWeek == 0) ? event?.title : null}
            </div>
        )
    // } 

  }


  return (
    <div className='calendar'>
      <div className="calendar__header">
        <div className='calendar__header-button' onClick={prevMonth}>Prev</div>
        <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <div className='calendar__header-button' onClick={nextMonth}>Next</div>
      </div>
      
      <div className="weekdays">
        <div className='weekday'>Sun</div>
        <div className='weekday'>Mon</div>
        <div className='weekday'>Tue</div>
        <div className='weekday'>Wed</div>
        <div className='weekday'>Thu</div>
        <div className='weekday'>Fri</div>
        <div className='weekday'>Sat</div>
      </div>
      <div className="days">
        {daysArray.map((day, index) => {

            day.events.sort((a,b)=> b.id - a.id)
            return(
                <div 
                    key={day.date.toISOString()} 
                    className={`day ${day.isCurrentMonth ? ' current' : ''}` + (day.selected ? " selected" : "")}
                    onClick={() => changeCurrentDay(day)}
                >
                <div className="date">{day.date.getDate()}</div>
                
                <div className='calendar__on-event-container'>

                    

                    {day.events.map((event, index) => {

                        let startDate = new Date(event.startDate)
                        let endDate = new Date(event.endDate)
                        //Get week of start date
                        let curr = new Date(day.date); 
                        let first = curr.getDate() - curr.getDay(); 
                        let last = first + 6; 
    
                        let firstday = new Date(curr.setDate(first))
                        let lastday = new Date(curr.setDate(last))

                         
                        // Check if start and end dates are within same week 
                        if ( (startDate >= firstday && startDate <= lastday) && (endDate > firstday && endDate <= lastday) ){
                            let sd = new Date(startDate)
                            let ed = new Date(endDate)
    
                            return renderEvents(sd, ed, day, event, index)
    
                         } else if ( startDate >= firstday && startDate <= lastday){
                                // start date is in week, set end date to last day of week
    
                                let ed = new Date(lastday)
    
                                return renderEvents(startDate, ed, day, event, index)
    
                            } else if (endDate >= firstday && endDate <= lastday){
                                // enddate is in week, set start date to first day of week, 0
                                let sd = new Date(firstday)
                                let ed = new Date(endDate)
    
                                return renderEvents(sd, ed, day, event, index)
    
                            } else{ 
                                //start and end date are first and last day of week
                                let sd = new Date(firstday)
                                let ed = new Date(lastday)
    
                                return renderEvents(sd, ed, day, event, index)
                            }
    
                    })}
                </div>
              </div>
            )

        })}
      </div>
    </div>
  );
};

export default Calendar;

