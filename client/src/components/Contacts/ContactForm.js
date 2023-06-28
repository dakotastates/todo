import { Person, Building, Envelope, Telephone, Balloon, Folder  } from 'react-bootstrap-icons';

const ContactForm = () =>{

    return(
        <div className='profile__form-container'>
            <div className='profile__form-group-container'>
                <Person />
                <div className='profile__form-input'>
                    <input type='text' placeholder='First Name' />
                    <input type='text' placeholder='Last Name' />
                </div>
            </div>
            
            <div className='profile__form-group-container'>
                <Building />
                <div className='profile__form-input'>
                    <input type='text' placeholder='Company' />
                    <input type='text' placeholder='Job Title' />
                </div>
            </div>

            <div className='profile__form-group-container'>
                <Envelope />
                <div className='profile__form-input'>
                    <input type='text' placeholder='Email' />
                </div>
            </div>
            <div className='profile__form-group-container'>
                <Telephone />
                <div className='profile__form-input'>
                    <input type='text' placeholder='Phone' />
                </div>
            </div>
            <div className='profile__form-group-container'>
                <Balloon />
                <div className='profile__form-input'>
                    <input type='text' placeholder='Birthday' />
                </div>
            </div>
            <div className='profile__form-group-container'>
                <Folder />
                <div className='profile__form-input'>
                    <input type='text' placeholder='Notes' />
                </div>
            </div>
        </div>
    )

}

export default ContactForm