import { useState, useRef, useEffect } from 'react'
import './MyTasksMenu.css'
import { Star, Check2 } from 'react-bootstrap-icons';

import {useDispatch, useSelector} from 'react-redux'
import {getLists, setSelectedList, createList} from '../../store/lists'
import CreateTaskList from './CreateTaskList';
import TaskLists from './TaskLists';

const MyTasksMenu = () =>{
    const [toggleMenu, setToggleMenu] = useState(false)
    const [loading, setLoading] = useState(false)


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
        setLoading(true)
        dispatch(getLists()).then(()=>{
            setLoading(false)
        })
    },[])  

    useEffect(()=>{
        dispatch(setSelectedList(lists[0]))
    },[lists[0]])

    const handleListClick = (list) =>{
        // setSelectedList(list) 
        dispatch(setSelectedList(list)) 
    } 

    

    
    if (loading){
        return(<div>Loading...</div>)
    }else{
    return (
    <div className='my__tasks-container'>
        <div className='my__tasks-button' onClick={handleOpen}>{selectedList?.name}</div>
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
                        <TaskLists handleListClick={handleListClick} selectedList={selectedList} />
                    </div>
                    <div className='my__tasks-list-bottom'>
                        <CreateTaskList />
                    </div>
                </div>
            </div>
            : null 
        } 

    </div>
    
    )
    }
}

export default MyTasksMenu 
