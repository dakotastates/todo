import { useState, useRef, useEffect } from 'react'
import './MyTasksMenu.css'
import { Star, Check2, Plus } from 'react-bootstrap-icons';

import {useDispatch, useSelector} from 'react-redux'
import {getLists, setSelectedList} from '../../store/lists'

const MyTasksMenu = () =>{
    const [toggleMenu, setToggleMenu] = useState(false)
    // const [selectedList, setSelectedList] = useState({id: 0, name: 'My Tasks'})


    const refMenu = useRef(null) 

    const dispatch = useDispatch()
    const { lists, selectedList } = useSelector(state => state.lists) 

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

    useEffect(()=>{
        dispatch(getLists()) 
    },[]) 

    const handleListClick = (list) =>{
        setSelectedList(list) 
        dispatch(setSelectedList(list)) 
    }



    return (
    <div className='my__tasks-container'>
        <div className='my__tasks-button' onClick={handleOpen}>{selectedList.name}</div>
        {toggleMenu ? 
            <div className='my__tasks-dropdown' ref={refMenu}>
                <div className='my__tasks-list-container'>
                    <div className='my__tasks-list-top'>
                        <div className='my__tasks-list-item' onClick={()=> handleListClick({id: null, name: 'Starred'})}>
                            <div className='my__tasks-list-icon'><Star /></div>
                            <div className='my__tasks-list-text'>Starred</div>
                            <div className='spacer' />
                        </div>
                    </div>
                    <div className='my__tasks-list-mid'>
                        <ul>
                            <li onClick={()=>handleListClick({id: 0, name: 'My Tasks'})}>
                                <div className='my__tasks-list-item'>
                                    <div className='my__tasks-list-icon'>{(selectedList.id == 0) ? <Check2 /> : null}</div>
                                    <div className='my__tasks-list-text'>My Tasks</div>
                                    <div className='spacer' />
                                </div>
                            </li>
                            {lists?.map(list => (
                            <li key={list.id} onClick={()=>handleListClick(list)}>
                                <div className='my__tasks-list-item'>
                                    <div className='my__tasks-list-icon'>{(selectedList.id == list.id ) ? <Check2 /> : null}</div>
                                    <div className='my__tasks-list-text'>{list.name}</div>
                                    <div className='spacer' />
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className='my__tasks-list-bottom'>
                        <div className='my__tasks-list-item'>
                            <div className='my__tasks-list-icon'><Plus /></div>
                            <div className='my__tasks-list-text'>Create new list</div>
                            <div className='spacer' />
                        </div>
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


{/* <li>
    <div className='my__tasks-list-item'>
        <div className='my__tasks-list-icon'></div>
        <div className='my__tasks-list-text'>List 1</div>
        <div className='spacer' />
    </div>
</li> */}