import { useEffect } from "react"
import Contacts from "../components/Contacts/Contacts"
import {useDispatch, useSelector} from 'react-redux'
import {getContacts} from '../store/contacts'

const ContactsPage = ()=>{

    const dispatch = useDispatch()
    const { contacts } = useSelector(state => state.contacts) 

    useEffect(()=>{
        dispatch(getContacts()) 
        console.log(contacts)

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