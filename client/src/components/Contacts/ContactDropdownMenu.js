import { useState, useRef, useEffect } from 'react'
import { ThreeDotsVertical, Trash, Printer, Upload } from 'react-bootstrap-icons';
import {useDispatch} from 'react-redux'
import './ContactDropdownMenu.css'
import {deleteContact} from '../../store/contacts'


const ContactDropdownMenu = props =>{
    const [toggleMenu, setToggleMenu] = useState(false)

    const dispatch = useDispatch() 


    const refMenu = useRef(null) 

    const handleOpen = () =>{
        setToggleMenu(!toggleMenu)
    }

    const closeOpenMenu = e =>{
        if(!refMenu.current?.contains(e.target)){
            setToggleMenu(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('click', closeOpenMenu, true)
    },[]) 



    return (
    <div className='toolbar__menu-container'>
        <div onClick={handleOpen}><ThreeDotsVertical /></div>
        {toggleMenu ? 
            <div className='toolbar__menu' ref={refMenu}>

                       <div className='contact__menu'>
                            <div className='contact__menu-item'><Printer /> <div className='contact__menu-item-text'>Print </div> <div className='spacer' /></div>
                            <div className='contact__menu-item'><Upload/> <div className='contact__menu-item-text'>Export </div> <div className='spacer' /></div>
                            <div className='contact__menu-item' onClick={()=>dispatch(deleteContact(props.id))}><Trash /> <div className='contact__menu-item-text'> Delete </div> <div className='spacer' /></div>
                       </div>

            </div>
            : null 
        } 

    </div>
    )
}

export default ContactDropdownMenu 