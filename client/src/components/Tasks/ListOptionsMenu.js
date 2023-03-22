import { useState, useRef, useEffect } from 'react'
import { ThreeDotsVertical } from 'react-bootstrap-icons';

const ListOptionsMenu = () =>{
    const [toggleMenu, setToggleMenu] = useState(false)

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

    return(
        <div>
            <div className='my__tasks-container'>
        <div onClick={handleOpen}><ThreeDotsVertical /></div>
        {toggleMenu ? 
            <div className='task__dropdown' ref={refMenu}>
                <div className='my__tasks-list-container'>
                    <div className='my__tasks-list-top'>Top</div>
                    <div className='my__tasks-list-mid'>
                       Mid
                    </div>
                    <div className='my__tasks-list-bottom'>Bottom</div>
                </div>
            </div>
            : null 
        } 

    </div>
        </div>
    )
} 

export default ListOptionsMenu