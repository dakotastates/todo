import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ThreeDotsVertical, Star, Envelope, Telephone, Balloon, Plus  } from 'react-bootstrap-icons';
import '../components/Contacts/ContactsProfile.css'

const ContactProfilePage = () =>{

    const navigate = useNavigate();

    return(
        <div className='profile__container'>
            <div className='profile__header'>
                <div className='profile__back-btn' onClick={()=> navigate(-1)}><ArrowLeft /></div>
                <img className='profile__avatar' src='https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image-Transparent-Background.png' />
                <div className='profile__name-container'>
                    <div className='profile__name'>Contact 1</div>
                    <div className='profile__label-btn'><Plus /> Label</div>
                </div>
                <div className='profile__menu'>
                    <Star />
                    <ThreeDotsVertical />
                    <div className='profile__edit-btn'>Edit</div>
                </div>
            </div>
            <div className='profile__divider' />
            <div className='profile__details-container'>
                <div className='profile__details-label'>Contact Details</div>
                <div><Envelope /> Add email</div>
                <div><Telephone /> Add phone </div>
                <div><Balloon /> Add birthday</div>
            </div>
        </div>
    )

}

export default ContactProfilePage