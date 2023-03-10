import { createSlice } from '@reduxjs/toolkit' 

const data = [
    {
        id: 1,
        date: '2023-03-02T01:14' ,
        task: 'clean room 2', 
        category: 'personal',
        priority: 'Minor/low', 
        completed: false, 
        details: 'Here are some details',
        onCalendar: false,
        favorited: false,
        repeat: false,
        associates: [], 
        notifs: [
          {
            id: 1,
            type: 'alert', 
            notif: '15 minutes before'
          },
          {
            id: 2,
            type: 'alert', 
            notif: '30 minutes before'
          }
        ]
    },
    {
        id: 2,
        date: '2023-03-02T01:14' ,
        task:'make dinner',
        category: 'personal',
        priority: 'Major/high', 
        completed: false, 
        details: 'Here sfdsfsd are some details',
        onCalendar: false,
        favorited: false,
        repeat: false,
        associates: [], 
        notifs: [
          {
            id: 1,
            type: 'alert', 
            notif: '15 minutes before'
          },
          {
            id: 2,
            type: 'alert', 
            notif: '30 minutes before'
          }
        ]
    },
    {
        id: 3,
        date: '2023-03-02T01:14' ,
        task: 'order tickets',
        category: 'work', 
        priority: 'Critical/severe', 
        completed: false, 
        details: 'Here are sfsdfsdf some details',
        onCalendar: false,
        favorited: false,
        repeat: false,
        associates: [],
        notifs: [
          {
            id: 1,
            type: 'alert', 
            notif: '15 minutes before'
          },
          {
            id: 2,
            type: 'alert', 
            notif: '30 minutes before'
          }
        ]
    }, 
    {
        id: 4,
        date: '2023-03-02T01:14' ,
        task: 'Buy Groceries',
        category: 'personal', 
        priority: 'Medium/moderate', 
        completed: false, 
        details: 'sdsfs  Here are some details',
        onCalendar: false,
        favorited: false,
        repeat: false,
        associates: [], 
        notifs: [
          {
            id: 1,
            type: 'alert', 
            notif: '15 minutes before'
          },
          {
            id: 2,
            type: 'alert', 
            notif: '30 minutes before'
          }
        ]
    }, 
    {
        id: 5,
        date: '2023-03-02T01:14' ,
        task: 'Pet a dog',
        category: 'work',
        completed: false, 
        details: 'Here are some details sdfsdfsdfsf', 
        onCalendar: false,
        favorited: false,
        repeat: false,
        associates: [
          {
            id: 1,
            name: 'guest 1', 
            email: 'guest1@test.com'
          }, 
          {
            id: 2, 
            name: 'guest 2', 
            email: 'guest2@test.com'
          }
      ], 
      notifs: [
        {
          id: 1,
          type: 'alert', 
          notif: '15 minutes before'
        },
        {
          id: 2,
          type: 'alert', 
          notif: '30 minutes before'
        }
      ]
    }, 
    {
        id: 6,
        date: '' ,
        task: '',
        category: '',
        completed: false, 
        details: '',
        onCalendar: false,
        favorited: false,
        repeat: false,
        associates: [], 
        notifs: []
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
      state.tasks = [...state.tasks, action.payload]
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
        task.priority = action.payload.priority
      }
    },
    deleteTaskSuccess: (state, action) =>  {
      const tasks = state.tasks.filter((task) => task.id !== action.payload)
  
      state.tasks = tasks
    },
    rearrangeTasksSuccess: (state, action) =>  {
      state.tasks = action.payload
    },
    createTaskNotifSuccess: (state, action) =>  {
      const task = state.tasks.find((task) => task.id === action.payload.taskId)
      if (task){
        task.notifs = [...task.notifs, action.payload]
      }
    },
    updateTaskNotifSuccess: (state, action) =>  {
      const task = state.tasks.find((task) => task.id === action.payload.taskId)
      if (task){
        const notif = task.notifs.find((notif)=> notif.id === action.payload.id)
        if (notif){
          notif.notif = action.payload.notif
        }
      }
    },
  },
}); 
export default slice.reducer 

// Actions
const { createTaskSuccess, getTasksSuccess, completeTaskSuccess, updateTaskSuccess, deleteTaskSuccess, rearrangeTasksSuccess, createTaskNotifSuccess, updateTaskNotifSuccess } = slice.actions

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

export const deleteTask = (data) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(deleteTaskSuccess(data))
  } catch (e) {
    return console.error(e.message);
  }
}

export const rearrangeTasks = (data) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(rearrangeTasksSuccess(data))
  } catch (e) {
    return console.error(e.message);
  }
}

export const createTaskNotif = (data) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(createTaskNotifSuccess(data))
  } catch (e) {
    return console.error(e.message);
  }
}

export const updateTaskNotif = (data) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(updateTaskNotifSuccess(data))
  } catch (e) {
    return console.error(e.message);
  }
}