import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ArrowLeft, ThreeDotsVertical, Star, Plus, X, Image  } from 'react-bootstrap-icons';
import '../components/Contacts/ContactsProfile.css'
import ContactDropdownMenu from '../components/Contacts/ContactDropdownMenu';
import ContactProfileDetails from '../components/Contacts/ContactProfileDetails';
import ContactForm from '../components/Contacts/ContactForm';
import {useDispatch, useSelector} from 'react-redux'
import {getContact, createContact, updateContact} from '../store/contacts'

const ContactProfilePage = () =>{
    const [toggleEdit, setToggleEdit] = useState(false)
    const [loaded, setLoaded] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [company, setCompany] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [birthday, setBirthday] = useState('')
    const [notes, setNotes] = useState('') 

    const dispatch = useDispatch()
    const { contact } = useSelector(state => state.contacts) 


    const navigate = useNavigate();
    const params = useParams()
    const location = useLocation()

    const handleToggleEdit = () =>{
        setToggleEdit(!toggleEdit)
    }

    const handleSave = () =>{
        let dataObj = {
            first_name: firstName,
            last_name: lastName, 
            company: company,
            job_title: jobTitle, 
            email: email, 
            phone: phone, 
            birthday: birthday, 
            notes: notes

        }
        if (location.pathname == '/contacts/new'){
            dispatch(createContact(dataObj)).then(()=>{
                navigate('/contacts')
            })
        } else{
            dispatch(updateContact(dataObj, params.id))
        }
    }

    useEffect(()=>{
        if (location.pathname == '/contacts/new'){
            handleToggleEdit() 
        } else if (params){
            
            dispatch(getContact(params.id)).then(()=>{ 
                setLoaded(true)
                
                if(loaded){
                    if(params.id == contact.id){
                        setFirstName(contact.first_name)
                        setLastName(contact.last_name)
                        setEmail(contact.email)
                        setBirthday(contact.birthday)
                        setCompany(contact.company)
                        setJobTitle(contact.job_title)
                        setNotes(contact.notes)
                    } else {
                        navigate('/notfound')
                    }
                }


            }).catch((err)=>{
                console.log('Error', err) 
            })
        }  
        
    },[loaded])


    useEffect(()=>{
        const editParam = new URLSearchParams(location.search).get('edit')
        if (editParam){
            handleToggleEdit()
        } 

    },[])

    return(
        <div className='profile__container'>
            <div className='profile__header'>
                {toggleEdit ? <div className='profile__back-btn' onClick={handleToggleEdit}>< X /></div> : <div className='profile__back-btn' onClick={()=> navigate(-1)}><ArrowLeft /></div>}

                <img className='profile__avatar' src='https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image-Transparent-Background.png' />
                
                <div className='profile__name-container'>
                    <div className='profile__name'>{firstName} {lastName}</div>
                    <div className='profile__label-btn'><Plus /> Label</div>
                </div>
                <div className='profile__menu-container'>
                    <div className='profile__menu'>
                        {toggleEdit ? <div className='spacer' /> : 
                            <>
                                <Star />
                                <ContactDropdownMenu />
                            </>
                        }
                        
                        <div className='profile__edit-btn' onClick={handleToggleEdit}>{toggleEdit ? <div onClick={handleSave}>Save</div> : 'Edit'}</div>
                    </div>
                </div>
            </div>
            <div className='profile__divider' />

            {toggleEdit ? 
            <ContactForm
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                company={company}
                setCompany={setCompany}
                jobTitle={jobTitle}
                setJobTitle={setJobTitle}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                birthday={birthday}
                setBirthday={setBirthday}
                notes={notes}
                setNotes={setNotes}
             /> : 
             <ContactProfileDetails 
                email={email} 
                phone={phone} 
                birthday={birthday}
                handleToggleEdit={handleToggleEdit}
             />}
        </div>
    )

}

export default ContactProfilePage