import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import tasks from './tasks'
import user from './user'
import notifs from './notifs'
import lists from './lists'
import calendar from './calendar'


const reducer = combineReducers({
    tasks, 
    user, 
    notifs, 
    lists, 
    calendar
})
const store = configureStore({
  reducer,
})
export default store;