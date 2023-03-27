import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment';

const CalendarDrawer = () =>{

    const { selectedDay } = useSelector(state => state.calendar) 
    
    let day
    if (selectedDay){
       day = JSON.parse(selectedDay)
       
    }

    return(
    <div>
        <div className='right-side-drawer__text'>
            {moment(day).format("MM/DD/YYYY")}
        </div>
        <div className='right-side_drawer__content'>
            Calendar Drawer Content
        </div>
    </div>
    )

}

export default CalendarDrawer