import { createSlice } from '@reduxjs/toolkit' 

const data = [
    {
        id: 1,
        date: '2023-03-02T01:14' ,
        task: 'clean room', 
        category: 'personal',
        priority: 'Minor/low', 
        completed: false, 
        details: 'Here are some details'

    },
    {
        id: 2,
        date: '2023-03-02T01:14' ,
        task:'make dinner',
        category: 'personal',
        priority: 'Major/high', 
        completed: false, 
        details: 'Here sfdsfsd are some details'
    },
    {
        id: 3,
        date: '2023-03-02T01:14' ,
        task: 'order tickets',
        category: 'work', 
        priority: 'Critical/severe', 
        completed: false, 
        details: 'Here are sfsdfsdf some details'
    }, 
    {
        id: 4,
        date: '2023-03-02T01:14' ,
        task: 'Buy Groceries',
        category: 'personal', 
        priority: 'Medium/moderate', 
        completed: false, 
        details: 'sdsfs  Here are some details'
    }, 
    {
        id: 5,
        date: '2023-03-02T01:14' ,
        task: 'Pet a dog',
        category: 'work',
        completed: false, 
        details: 'Here are some details sdfsdfsdfsf'
    }, 
    {
        id: 6,
        date: '' ,
        task: '',
        category: '',
        completed: false, 
        details: ''
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
    completeTaskSuccess: (state, action) =>  {
      const task = state.tasks.find((task) => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    updateTaskSuccess: (state, action) =>  {
      const task = state.tasks.find((task) => task.id === action.payload.id)
  
      if (task) {
        
        task.task = action.payload.task
        task.category = action.payload.category
        task.date = action.payload.date
        task.details = action.payload.details
      }
    },
  },
}); 
export default slice.reducer 

// Actions
const { createTaskSuccess, getTasksSuccess, completeTaskSuccess, updateTaskSuccess } = slice.actions
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

export const completeTask = (id) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(completeTaskSuccess(id))
  } catch (e) {
    return console.error(e.message);
  }
}

export const updateTask = (data) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(updateTaskSuccess(data))
  } catch (e) {
    return console.error(e.message);
  }
}