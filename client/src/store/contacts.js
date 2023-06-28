import { createSlice } from '@reduxjs/toolkit' 

const data = [{
  id: 1, 
  name: 'Contact 1', 
  email: 'contact1@test.com', 
  phone: '555-555-5555', 
  jobTitle: 'Contact 1 Title', 
  labels: [],
  birthday: '1/1/1990', 
  imageUrl: 'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image-Transparent-Background.png'
}, {
  id: 2, 
  name: 'Contact 2', 
  email: 'contact2@test.com', 
  phone: '555-555-5555', 
  jobTitle: 'Contact 2 Title', 
  labels: ['label 1', 'label 3'],
  birthday: '2/2/1990', 
  imageUrl: ''
},{
  id: 3, 
  name: 'Contact 3', 
  email: 'contact3@test.com', 
  phone: '555-555-5555', 
  jobTitle: 'Contact 3 Title', 
  labels: [],
  birthday: '3/3/1990', 
  imageUrl: 'https://img.freepik.com/free-icon/user_318-563642.jpg'
},{
  id: 4, 
  name: 'Contact 4', 
  email: 'contact4@test.com', 
  phone: '555-555-5555', 
  jobTitle: 'Contact 4 Title', 
  labels: [],
  birthday: '4/4/1990', 
  imageUrl: 'https://img.freepik.com/free-icon/user_318-563642.jpg'
}
]

// Slice
const slice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [], 
    contact: {}
  },
  reducers: {
    createContactSuccess: (state, action) => {
      state.contacts = [...state.contacts, action.payload]
    },
    getContactsSuccess: (state, action) =>  { 
      state.contacts = action.payload
    },
    getContactSuccess: (state, action) =>  { 
      // const contact = state.contacts.find((contact)=> contact.id == action.payload)
        state.contact = action.payload
    },
    updateContactSuccess: (state, action) =>  {
      const contact = state.contacts.find((contact) => contact.id === action.payload.id)
      
      if (contact) {
        contact.firstName = action.payload.firstName 
        // state.selectedList.name = action.payload.name
      }
    },
    deleteContactSuccess: (state, action) =>  {
      const contacts = state.contacts.filter((contact) => contact.id !== action.payload)
      
      state.contacts = contacts
    },

  },
}); 
export default slice.reducer 

// Actions
const { createContactSuccess, getContactsSuccess, updateContactSuccess, deleteContactSuccess, getContactSuccess } = slice.actions

export const createContact = (contact) => async dispatch => {


  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify({contact}),
  };

  try {
    const res = await fetch("http://localhost:3000/api/v1/contacts", configObj);
    const json = await res.json();
    
    if (json.error) {

      throw new Error(json.error + " " + json.message);
    }
    dispatch(createContactSuccess(json)) 
  } catch (e) {
    return console.error(e.message);
  }
}

export const getContacts = () => async dispatch => { 
  const configObj = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  try {
    const res = await fetch("http://localhost:3000/api/v1/contacts", configObj);
    const json = await res.json();
    
    if (json.error) {
      // debugger
      throw new Error(json.error + " " + json.message);
    }
    return dispatch(getContactsSuccess(json))
  } catch (e) {
    return console.error(e.message);
  }
} 

export const updateContact = (contact, id) => async dispatch => { 
  

  const configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify({contact}),
  };
  
  try {
    const res = await fetch(`http://localhost:3000/api/v1/contacts/${id}`, configObj);
    const json = await res.json();
    
    if (json.error) {
      
      throw new Error(json.error + " " + json.message);
    }
    return dispatch(updateContactSuccess(json))
  } catch (e) {
    return console.error(e.message);
  }
}

export const deleteContact = (id) => async dispatch => {


try {
    return dispatch(deleteContactSuccess(id))
  } catch (e) {
    return console.error(e.message);
  }
} 

export const getContact = (id) => async dispatch => {

  const configObj = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  
  try {
    const res = await fetch(`http://localhost:3000/api/v1/contacts/${id}`, configObj);
    
    const json = await res.json();
    
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    return dispatch(getContactSuccess(json))
  } catch (e) {
    
    return console.error(e.message);
  }
} 



