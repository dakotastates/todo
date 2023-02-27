import { createSlice } from '@reduxjs/toolkit' 

const data = [
    {
        id: 1,
        date: '2/23/23' ,
        task: 'clean room', 
        category: 'personal',
        priority: 'Minor/low', 
        completed: false

    },
    {
        id: 2,
        date: '2/24/23' ,
        task:'make dinner',
        category: 'personal',
        priority: 'Major/high', 
        completed: true
    },
    {
        id: 3,
        date: '2/23/23' ,
        task: 'order tickets',
        category: 'work', 
        priority: 'Critical/severe', 
        completed: false
    }, 
    {
        id: 4,
        date: '2/23/23' ,
        task: 'Buy Groceries',
        category: 'personal', 
        priority: 'Medium/moderate', 
        completed: false
    }, 
    {
        id: 5,
        date: '2/23/23' ,
        task: 'Pet a dog',
        category: 'work',
        completed: false
    }
]

// Slice
const slice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    createTaskSuccess: (state, action) => {
      state.tasks = state.tasks.push(action.payload);
    },
    getTasksSuccess: (state, action) =>  {
      state.tasks = action.payload
    },
  },
}); 
export default slice.reducer 

// Actions
const { createTaskSuccess, getTasksSuccess } = slice.actions
export const createTask = (task) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(createTaskSuccess(task));
  } catch (e) {
    return console.error(e.message);
  }
}
export const getTasks = () => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(getTasksSuccess(data))
  } catch (e) {
    return console.error(e.message);
  }
}