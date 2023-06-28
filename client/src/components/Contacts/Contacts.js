import {useState} from "react"; 
import './Contacts.css'
import { Trash, Pencil, Star, ThreeDotsVertical, Printer, Upload } from 'react-bootstrap-icons';
import ToolbarDropdown from "../Toolbar/ToolbarDropdown";
import ContactDropdownMenu from "./ContactDropdownMenu";
import { useNavigate } from 'react-router-dom';

const Contacts = (props)=>{
    const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false)
    const [selectedDropdownMenu, setSelectedDropdownMenu] = useState(null)

    const navigate = useNavigate();

    const handleToggleDropdownMenu = target=>{
        setSelectedDropdownMenu(target)
        setToggleDropdownMenu(!toggleDropdownMenu)
    }

    return(
    <div className='contacts__table'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone number</th>
                    <th>Job Title</th>
                    <th>Labels</th>
                    <th>
                        <div className='contacts__header-options'>
                            <Printer />
                            <Upload />
                            <ThreeDotsVertical onClick={()=>handleToggleDropdownMenu('contacts-header')} />
                        </div>
                        <ToolbarDropdown toggleDropdownMenu={toggleDropdownMenu} setToggleDropdownMenu={setToggleDropdownMenu} selectedDropdownMenu={selectedDropdownMenu} />
                    </th>
                </tr>
            </thead>
            <div className='contacts__count-bar'>Contacts ({props.data.length})</div>
            <tbody>
                {props.data.map((contact, index)=>(
                    <tr key={contact.id} onClick={()=> navigate(`/contacts/${contact.id}`)}>
                        <td>
                            <div className='contacts__avatar-checkbox-container'>
                                <div onClick={(e)=> e.stopPropagation()} className='contacts__avatar-checkbox'><input className='contacts__checkbox' type='checkbox' /></div>
                                <img src={contact.imageUrl ? contact.imageUrl : "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"} alt="Avatar" class="avatar" />
                            
                            <div >{contact.first_name}</div>
                            </div>
                        </td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.job_title}</td>
                        <td>{contact.labels}</td>
                        <td>
                            <div className='contacts__options-container' onClick={(e)=> e.stopPropagation()}>
                                <Star />
                                <Pencil onClick={()=> navigate(`/contacts/${contact.id}?edit=true`)} />
                                <ContactDropdownMenu id={contact.id} />
                            </div>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
} 

export default Contacts