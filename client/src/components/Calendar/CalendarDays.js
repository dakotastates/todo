import { useSelector} from 'react-redux'

const CalendarDays = props =>{
    let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1)
    let weekdayOfFirstDay = firstDayOfMonth.getDay(); 
    let currentDays = []

    const { events } = useSelector(state => state.calendar)
    
    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) { 
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        } else {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        } 
        
        const dayEvents = events.filter(event => JSON.stringify(firstDayOfMonth) >= JSON.stringify(event.startDate) && JSON.stringify(firstDayOfMonth) <= JSON.stringify(event.endDate))
        
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

    return(
        <div className='calendar__table-content'>
            {
            currentDays.map((day, index) => {
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