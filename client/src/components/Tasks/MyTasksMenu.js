import { useState, useRef, useEffect } from 'react'
import './MyTasksMenu.css'

const MyTasksMenu = () =>{
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



    return (
    <div className='my__tasks-container'>
        <div className='my__tasks-button' onClick={handleOpen}>My tasks</div>
        {toggleMenu ? 
            <div className='my__tasks-dropdown' ref={refMenu}>
                <div>Starred</div>
                <div className='my__tasks-list-container'>
                    <div className='my__tasks-list'>
                        <div className='my__tasks-list-item'>My Tasks</div>
                    </div>
                    <div className='my__taskslist-button'>Create new list</div>
                </div>
            </div>
            : null 
        }

    </div>
    )
}

export default MyTasksMenu