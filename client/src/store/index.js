import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import tasks from './tasks'
import user from './user'
import notifs from './notifs'
import lists from './lists'
import calendar from './calendar'
import contacts from './contacts'


const reducer = combineReducers({
    tasks, 
    user, 
    notifs, 
    lists, 
    calendar, 
    contacts
})
const store = configureStore({
  reducer,
})
export default store;