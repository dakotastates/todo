import './Contacts.css'

const Contacts = (props)=>{
    return(
    <div className='contacts__table'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone number</th>
                    <th>Job Title</th>
                    <th>Lables</th>
                </tr>
            </thead>
            <div className='contacts__count-bar'>Contacts ({props.data.length})</div>
            <tbody>
                {props.data.map((contact, index)=>(
                    <tr key={contact.id}>
                        <td>
                            <div className='contacts__avatar-checkbox-container'>
                                <div className='contacts__avatar-checkbox'><input className='contacts__checkbox' type='checkbox' /></div>
                                <img src={contact.imageUrl ? contact.imageUrl : "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"} alt="Avatar" class="avatar" />
                            
                            {contact.name}
                            </div>
                        </td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.jobTitle}</td>
                        <td>{contact.labels}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
} 

export default Contacts