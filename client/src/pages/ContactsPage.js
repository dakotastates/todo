import Contacts from "../components/Contacts/Contacts"

const ContactsPage = ()=>{
    const data = [{
        id: 1, 
        name: 'Contact 1', 
        email: 'contact1@test.com', 
        phone: '555-555-5555', 
        jobTitle: 'Contact 1 Title', 
        labels: ['label 3', 'label 4'],
        birthday: '1/1/1990', 
        imageUrl: 'image url'
    }, {
        id: 2, 
        name: 'Contact 2', 
        email: 'contact2@test.com', 
        phone: '555-555-5555', 
        jobTitle: 'Contact 2 Title', 
        labels: ['label 1', 'label 3'],
        birthday: '2/2/1990', 
        imageUrl: 'image url'
    },{
        id: 3, 
        name: 'Contact 3', 
        email: 'contact3@test.com', 
        phone: '555-555-5555', 
        jobTitle: 'Contact 3 Title', 
        labels: ['label 1', 'label 2'],
        birthday: '3/3/1990', 
        imageUrl: 'image url'
    }]
    return(
        <div>
            <h2>Contact Page</h2>
            {/* Search funtion */}
            <input type='text' placeholder="Search" />
            {/* Table for contacts */}
            <Contacts data={data} />
        </div>
    )
} 

export default ContactsPage