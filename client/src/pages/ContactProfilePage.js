import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ArrowLeft, ThreeDotsVertical, Star, Plus, X, Image  } from 'react-bootstrap-icons';
import '../components/Contacts/ContactsProfile.css'
import ContactDropdownMenu from '../components/Contacts/ContactDropdownMenu';
import ContactProfileDetails from '../components/Contacts/ContactProfileDetails';
import ContactForm from '../components/Contacts/ContactForm';

const ContactProfilePage = () =>{
    const [toggleEdit, setToggleEdit] = useState(false)

    const navigate = useNavigate();
    const params = useParams()
    const location = useLocation()

    const handleToggleEdit = () =>{
        setToggleEdit(!toggleEdit)
    }

    useEffect(()=>{
        const editParam = new URLSearchParams(location.search).get('edit')
        if (editParam){
            handleToggleEdit()
        } 
        if (location.pathname == '/contacts/new'){
            handleToggleEdit()
        }
    },[])

    return(
        <div className='profile__container'>
            <div className='profile__header'>
                {toggleEdit ? <div className='profile__back-btn' onClick={handleToggleEdit}>< X /></div> : <div className='profile__back-btn' onClick={()=> navigate(-1)}><ArrowLeft /></div>}

                <img className='profile__avatar' src='https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image-Transparent-Background.png' />
                
                <div className='profile__name-container'>
                    <div className='profile__name'>Contact 1</div>
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
                        
                        <div className='profile__edit-btn' onClick={handleToggleEdit}>{toggleEdit ? 'Save' : 'Edit'}</div>
                    </div>
                </div>
            </div>
            <div className='profile__divider' />

            {toggleEdit ? <ContactForm /> : <ContactProfileDetails />}
        </div>
    )

}

export default ContactProfilePage