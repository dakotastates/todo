import { createSlice } from '@reduxjs/toolkit' 

// Slice
const slice = createSlice({
  name: 'lists',
  initialState: {
    lists: [], 
    selectedList: {}
  },
  reducers: {
    createListSuccess: (state, action) => {
      state.lists = [...state.lists, action.payload]
    },
    getListsSuccess: (state, action) =>  { 
      state.lists = action.payload
    },
    updateListSuccess: (state, action) =>  {
      const list = state.lists.find((list) => list.id === action.payload.id)
  
      if (list) {
        list.name = action.payload.name
      }
    },
    deleteListSuccess: (state, action) =>  {
      const lists = state.lists.filter((list) => list.id !== action.payload)
  
      state.lists = lists
    },

    setSelectedListSuccess: (state, action) =>  { 
      state.selectedList = action.payload
    },

    // AddTaskToListSuccess: (state, action) =>  {
    //   console.log(action.payload)
    // },
  },
}); 
export default slice.reducer 

// Actions
const { createListSuccess, getListsSuccess, updateListSuccess, deleteListSuccess, setSelectedListSuccess, AddTaskToListSuccess } = slice.actions

export const createList = (list) => async dispatch => {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify({list}),
  };

  try {
    const res = await fetch("http://localhost:3000/api/v1/lists", configObj);
    const json = await res.json();
    
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    dispatch(createListSuccess(json)) 
  } catch (e) {
    return console.error(e.message);
  }
}
export const getLists = () => async dispatch => { 

  const configObj = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  try {
    const res = await fetch("http://localhost:3000/api/v1/lists", configObj);
    const json = await res.json();
    
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    return dispatch(getListsSuccess(json))
  } catch (e) {
    return console.error(e.message);
  }
} 

export const updateList = (list) => async dispatch => { 
  
  const configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify({list}),
  };

  try {
    const res = await fetch(`http://localhost:3000/api/v1/lists/${list.id}`, configObj);
    const json = await res.json();
    
    if (json.error) {
      
      throw new Error(json.error + " " + json.message);
    }
    return dispatch(updateListSuccess(json))
  } catch (e) {
    return console.error(e.message);
  }
}

export const deleteList = (id) => async dispatch => {

  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  try {

    const res = await fetch(`http://localhost:3000/api/v1/lists/${id}`, configObj);
    const json = await res.json();
    
    return dispatch(deleteListSuccess(json.list.id))
  } catch (e) {
    return console.error(e.message);
  }
} 

export const setSelectedList = (list) => async dispatch => { 

  try {
    return dispatch(setSelectedListSuccess(list))
  } catch (e) {
    return console.error(e.message);
  }
}  

// export const AddTaskToList = (data) => async dispatch => {

//   try {
//     return dispatch(AddTaskToListSuccess())
//   } catch {

//   }
// }