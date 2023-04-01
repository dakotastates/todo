import { createSlice } from '@reduxjs/toolkit' 

const data = [
  {
    id: 1,
    type: 'event', 
    title: '100 minutes before', 
    startDate: '2023-03-19T07:00:00.000Z',
    endDate: '2023-03-20T07:00:00.000Z', 
    startTime: '2023-03-20T07:00:00', 
    endTime: '2023-03-20T15:05:00'
  }, 
  {
    id: 2,
    type: 'reminder', 
    title: '20 minutes before',
    startDate: '2023-04-02T07:00:00.000Z',
    endDate: '2023-04-05T07:00:00.000Z',
    startTime: '2023-04-05T09:15:00', 
    endTime: '2023-04-05T10:45:00'
  }, 
  {
    id: 3,
    type: 'task', 
    title: '30 minutes before',
    startDate: '2023-03-26T07:00:00.000Z',
    endDate: '2023-03-30T07:00:00.000Z',
    startTime: '2023-03-30T09:15:00', 
    endTime: '2023-03-30T11:30:00'
  }

]

// Slice
const slice = createSlice({
  name: 'calendar',
  initialState: {
    selectedDay: null,
    events: []
  },
  reducers: {
    setSelectedDaySuccess: (state, action) => { 
      
      state.selectedDay = action.payload
    },

    getEventsSuccess: (state, action) => { 
      state.events = action.payload
    },
  },
}); 
export default slice.reducer 

// Actions
const { 
  setSelectedDaySuccess, 
  getEventsSuccess

} = slice.actions

export const setSelectedDay = (day) => async dispatch => {

  try {

    dispatch(setSelectedDaySuccess(JSON.stringify(day))) 
  } catch (e) {
    return console.error(e.message);
  }
}

export const getEvents = (id) => async dispatch => { 



  try {
    // const res = await fetch("http://localhost:3000/api/v1/events", configObj);
    // const json = await res.json();
    
    // if (json.error) {
    //   // debugger
    //   throw new Error(json.error + " " + json.message);
    // }
    return dispatch(getEventsSuccess(data))
  } catch (e) {
    return console.error(e.message);
  }
} 
