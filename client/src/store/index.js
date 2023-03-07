import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import tasks from './tasks'
import user from './user'
const reducer = combineReducers({
    tasks, 
    user
})
const store = configureStore({
  reducer,
})
export default store;