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
                <div className='my__tasks-list-container'>
                    <div className='my__tasks-list-top'>
                        <div className='my__tasks-list-item'>
                            <div className='my__tasks-list-icon'>Star</div>
                            <div className='my__tasks-list-text'>Starred</div>
                            <div className='spacer' />
                        </div>
                    </div>
                    <div className='my__tasks-list-mid'>
                        <ul>
                            <li><div className='my__tasks-list-item'>My Tasks</div></li>
                            <li><div className='my__tasks-list-item'>List 2</div></li>
                            <li><div className='my__tasks-list-item'>List 3</div></li>
                        </ul>
                    </div>
                    <div className='my__tasks-list-bottom'>
                        <div className='my__tasks-list-item'>New List</div>
                    </div>
                </div>
            </div>
            : null 
        } 

    </div>
    )
}

export default MyTasksMenu 


{/* <div>Starred</div>
<div className='my__tasks-list-container'>
    <div className='my__tasks-list'>
        <div className='my__tasks-list-item'>My Tasks</div>
    </div>
    <div className='my__taskslist-button'>Create new list</div>
</div> */}