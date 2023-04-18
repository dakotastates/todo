import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment';
import DateTimeSelector from './DateTimeSelector';
import { current } from '@reduxjs/toolkit';

const CalendarDrawer = () =>{
    const { selectedDay } = useSelector(state => state.calendar) 
    
    let currentDay
    if (selectedDay){
        
        currentDay = JSON.parse(selectedDay)
    }


        return(
        <div>
            <div className='right-side-drawer__text'>
                {moment(currentDay?.date).format("MM/DD/YYYY")}
            </div>
            <div className='right-side_drawer__content'>
                <div className='calendar__drawer-all-day'>
                    <div></div>
                </div>
                <DateTimeSelector day={currentDay?.date} events={currentDay?.events} />
            </div>
        </div>
        )


}

export default CalendarDrawer