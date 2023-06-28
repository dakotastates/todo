import { Envelope, Telephone, Balloon  } from 'react-bootstrap-icons';
const ContactProfileDetails = () =>{

    return(
        <div className='profile__details-container'>
            <div className='profile__details-label'>Contact Details</div>
            <div><Envelope /> Add email</div>
            <div><Telephone /> Add phone </div>
            <div><Balloon /> Add birthday</div>
        </div>
    )

}

export default ContactProfileDetails