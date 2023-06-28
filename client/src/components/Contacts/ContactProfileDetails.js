import { Envelope, Telephone, Balloon  } from 'react-bootstrap-icons';
const ContactProfileDetails = ({email, phone, birthday, handleToggleEdit}) =>{

    return(
        <div className='profile__details-container'>
            <div className='profile__details-label'>Contact Details</div>
            <div className='profile__details-item-container'>
                <Envelope /> {email ? <div className='profile__details-item'>{email}</div> 
                : <div className='profile__details-item' onClick={handleToggleEdit}>Add email</div>}
            </div>
            <div className='profile__details-item-container'>
                <Telephone /> {phone ? <div className='profile__details-item'>{phone}</div> 
                : <div className='profile__details-item' onClick={handleToggleEdit}>Add phone</div>} 
            </div>
            <div className='profile__details-item-container'>
                <Balloon /> {birthday ? <div className='profile__details-item'>{birthday}</div> 
                : <div className='profile__details-item' onClick={handleToggleEdit}>Add Birthday</div>}
            </div>
        </div>
    )

}

export default ContactProfileDetails