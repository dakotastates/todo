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
            <tbody>
                {props.data.map((contact, index)=>(
                    <tr>
                        <td>{contact.name}</td>
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