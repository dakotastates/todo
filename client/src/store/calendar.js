import { createSlice } from '@reduxjs/toolkit' 


// Slice
const slice = createSlice({
  name: 'calendar',
  initialState: {
    selectedDay: null,
  },
  reducers: {
    setSelectedDaySuccess: (state, action) => { 
      
      state.selectedDay = action.payload
    },
  },
}); 
export default slice.reducer 

// Actions
const { 
  setSelectedDaySuccess, 

} = slice.actions

export const setSelectedDay = (day) => async dispatch => {

  try {

    dispatch(setSelectedDaySuccess(JSON.stringify(day))) 
  } catch (e) {
    return console.error(e.message);
  }
}
