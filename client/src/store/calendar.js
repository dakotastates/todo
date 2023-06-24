import { createSlice } from '@reduxjs/toolkit' 

const data = [
  {
    id: 1,
    title: 'Event 1', 
    startDate: '2023-03-19T07:00:00.000Z',
    endDate: '2023-03-20T08:00:00.000Z', 
    allDay: true,
    // startTime: '2023-03-20T07:00:00', 
    // endTime: '2023-03-20T15:05:00'
  }, 
  {
    id: 2,
    title: 'Event 2',
    startDate: '2023-04-05T07:00:00.000Z',
    endDate: '2023-04-25T08:00:00.000Z',
    allDay: true,
    // startTime: '2023-04-05T01:15:00', 
    // endTime: '2023-04-05T03:45:00'
  }, 
  {
    id: 3,
    title: 'Event 3',
    startDate: '2023-03-26T07:00:00.000Z',
    endDate: '2023-03-26T08:00:00.000Z',
    allDay: false,
    // startTime: '2023-03-30T01:15:00', 
    // endTime: '2023-03-30T02:30:00'
  },
  {
    id: 4,
    title: 'Event 4',
    startDate: '2023-04-04T07:00:00.000Z',
    endDate: '2023-04-09T08:00:00.000Z',
    allDay: true,
    // startTime: '2023-04-05T09:15:00', 
    // endTime: '2023-04-05T10:45:00'
  }, 
  {
    id: 5,
    title: 'Single Day Event',
    startDate: '2023-05-22T07:00:00.000Z',
    endDate: '2023-05-22T08:00:00.000Z',
    allDay: false,
  }, 
  {
    id: 6,
    title: 'Next Day Event',
    startDate: '2023-05-23T07:00:00.000Z',
    endDate: '2023-05-24T08:00:00.000Z',
    allDay: false,
  }, 
  {
    id: 7,
    title: 'Two Day Event',
    startDate: '2023-05-22T07:00:00.000Z',
    endDate: '2023-05-23T08:00:00.000Z',
    allDay: false,
  }, 

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

    createEventSuccess: (state, action) => { 
      // console.log(action.payload)
      // debugger
      state.events = [...state.events, action.payload]
    },
  },
}); 
export default slice.reducer 

// Actions
const { 
  setSelectedDaySuccess, 
  getEventsSuccess,
  createEventSuccess

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

export const createEvent = (event) => async dispatch => { 



  try {
    // const res = await fetch("http://localhost:3000/api/v1/events", configObj);
    // const json = await res.json();
    
    // if (json.error) {
    //   // debugger
    //   throw new Error(json.error + " " + json.message);
    // }
    return dispatch(createEventSuccess(event))
  } catch (e) {
    return console.error(e.message);
  }
} 

