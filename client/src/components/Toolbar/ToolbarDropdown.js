import {useRef, useEffect} from 'react'

import ProfileDropdown from './ProfileDropdown'
import NotificationsDropdown from './NotificationsDropdown'

const ToolbarDropdown = props =>{
    const refMenu = useRef(null)




    const closeOpenMenu = e =>{
        if(!refMenu.current?.contains(e.target)){
            props.setToggleDropdownMenu(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('click', closeOpenMenu, true)
    },[]) 

    let content;
    if(props.selectedDropdownMenu == 'notif'){
        content = <NotificationsDropdown />
    } else if (props.selectedDropdownMenu == 'profile'){
        content = <ProfileDropdown />
    }


    return(
        <div className='toolbar__menu-container'>
             
            {props.toggleDropdownMenu ?
                <div className='toolbar__menu' ref={refMenu}>
                    {content}
                </div>
            :null
            }

        </div>
    )
}
export default ToolbarDropdown


{/* <Person onClick={handleOpen} /> */}


