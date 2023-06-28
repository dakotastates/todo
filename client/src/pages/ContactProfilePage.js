import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import '../components/Contacts/ContactsProfile.css'

const ContactProfilePage = () =>{

    const navigate = useNavigate();

    return(
        <div className='contacts__profile-container'>
            <div className='contacts__profile-header'>
                <div onClick={()=> navigate(-1)}><ArrowLeft /></div>
                <div>image</div>
                <div>name and label</div>
                <div>Edit Button</div>
            </div>
            <div>nav bar</div>
            <div>contact details</div>
        </div>
    )

}

export default ContactProfilePage