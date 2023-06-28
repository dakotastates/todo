import { useEffect } from "react"
import Contacts from "../components/Contacts/Contacts"
import {useDispatch, useSelector} from 'react-redux'
import {getContacts} from '../store/contacts'

const ContactsPage = ()=>{
    // const data = [{
    //     id: 1, 
    //     name: 'Contact 1', 
    //     email: 'contact1@test.com', 
    //     phone: '555-555-5555', 
    //     jobTitle: 'Contact 1 Title', 
    //     labels: [],
    //     birthday: '1/1/1990', 
    //     imageUrl: 'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image-Transparent-Background.png'
    // }, {
    //     id: 2, 
    //     name: 'Contact 2', 
    //     email: 'contact2@test.com', 
    //     phone: '555-555-5555', 
    //     jobTitle: 'Contact 2 Title', 
    //     labels: ['label 1', 'label 3'],
    //     birthday: '2/2/1990', 
    //     imageUrl: ''
    // },{
    //     id: 3, 
    //     name: 'Contact 3', 
    //     email: 'contact3@test.com', 
    //     phone: '555-555-5555', 
    //     jobTitle: 'Contact 3 Title', 
    //     labels: [],
    //     birthday: '3/3/1990', 
    //     imageUrl: 'https://img.freepik.com/free-icon/user_318-563642.jpg'
    // }]

    const dispatch = useDispatch()
    const { contacts } = useSelector(state => state.contacts) 

    useEffect(()=>{
        dispatch(getContacts()) 

    },[])   
    
    return(
        <div>
            <h2>Contacts</h2>
            {/* Search funtion */}
            <input className='contacts__search' type='text' placeholder="Search" />
            {/* Table for contacts */}
            <Contacts data={contacts} />
        </div>
    )
} 

export default ContactsPage