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
  },
  reducers: {
    createContactSuccess: (state, action) => {
      state.contacts = [...state.contacts, action.payload]
    },
    getContactsSuccess: (state, action) =>  { 
      state.contacts = action.payload
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
const { createContactSuccess, getContactsSuccess, updateContactSuccess, deleteContactSuccess } = slice.actions

export const createContact = (contact) => async dispatch => {


try {
    return dispatch(createContactSuccess(contact))
  } catch (e) {
    return console.error(e.message);
  }
}
export const getContacts = () => async dispatch => { 



try {
    return dispatch(getContactsSuccess(data))
  } catch (e) {
    return console.error(e.message);
  }
} 

export const updateContact = (contact) => async dispatch => { 
  


try {
    return dispatch(updateContactSuccess(contact))
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



