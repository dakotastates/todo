import { Person, Building, Envelope, Telephone, Balloon, Folder  } from 'react-bootstrap-icons';
import { useState } from 'react';

const ContactForm = ({
    firstName, 
    setFirstName, 
    lastName, 
    setLastName, 
    company, 
    setCompany, 
    jobTitle, 
    setJobTitle, 
    email, 
    setEmail, 
    phone, 
    setPhone, 
    birthday, 
    setBirthday, 
    notes, 
    setNotes
}) =>{


    return(
        <div className='profile__form-container'>
            <div className='profile__form-group-container'>
                <Person />
                <div className='profile__form-input'>
                    <input type='text' placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <input type='text' placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
            </div>
            
            <div className='profile__form-group-container'>
                <Building />
                <div className='profile__form-input'>
                    <input type='text' placeholder='Company' value={company} onChange={e => setCompany(e.target.value)} />
                    <input type='text' placeholder='Job Title' value={jobTitle} onChange={e => setJobTitle(e.target.value)} />
                </div>
            </div>

            <div className='profile__form-group-container'>
                <Envelope />
                <div className='profile__form-input'>
                    <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
            </div>
            <div className='profile__form-group-container'>
                <Telephone />
                <div className='profile__form-input'>
                    <input type='text' placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
            </div>
            <div className='profile__form-group-container'>
                <Balloon />
                <div className='profile__form-input'>
                    <input type='text' placeholder='Birthday' value={birthday} onChange={e => setBirthday(e.target.value)} />
                </div>
            </div>
            <div className='profile__form-group-container'>
                <Folder />
                <div className='profile__form-input'>
                    <input type='text' placeholder='Notes' value={notes} onChange={e => setNotes(e.target.value)} />
                </div>
            </div>
        </div>
    )

}

export default ContactForm