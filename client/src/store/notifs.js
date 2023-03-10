import { createSlice } from '@reduxjs/toolkit' 

const data = [
  {
    id: 1,
    type: 'alert', 
    notif: '10 minutes before'
  }, 
  {
    id: 2,
    type: 'alert', 
    notif: '20 minutes before'
  }, 
  {
    id: 3,
    type: 'alert', 
    notif: '30 minutes before'
  }

]

// Slice
const slice = createSlice({
  name: 'notifs',
  initialState: {
    notifs: [],
  },
  reducers: {
    createNotifSuccess: (state, action) => {
      console.log('notif success', action.payload)
      
      state.notifs = [...state.notifs, action.payload]
    
    },
    getNotifsSuccess: (state, action) =>  {
      state.notifs = action.payload      
    },

    updateNotifSuccess: (state, action) =>  {
      const notif = state.notifs.find((notif) => notif.id === action.payload.id)
  
      if (notif) {
        
        notif.notif = action.payload.notif
 
      }
    },
    deleteNotifSuccess: (state, action) =>  {
      const notifs = state.notifs.filter((notif) => notif.id !== action.payload)
  
      state.notifs = notifs
    },

  },
}); 
export default slice.reducer 

// Actions
const { createNotifSuccess, getNotifsSuccess, updateNotifSuccess, deleteNotifSuccess } = slice.actions

export const createNotif = (notif) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(createNotifSuccess(notif));
  } catch (e) {
    return console.error(e.message);
  }
}
export const getNotifs = () => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(getNotifsSuccess(data))
  } catch (e) {
    return console.error(e.message);
  }
} 



export const updateNotif = (data) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(updateNotifSuccess(data))
  } catch (e) {
    return console.error(e.message);
  }
}

export const deleteNotif = (data) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(deleteNotifSuccess(data))
  } catch (e) {
    return console.error(e.message);
  }
}
