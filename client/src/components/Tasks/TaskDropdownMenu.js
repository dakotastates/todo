import { useState, useRef, useEffect } from 'react'
import './MyTasksMenu.css'
import { ThreeDotsVertical } from 'react-bootstrap-icons';

import {useDispatch, useSelector} from 'react-redux'
import {getLists, setSelectedList} from '../../store/lists'
import {addTaskToList} from '../../store/tasks'
import CreateTaskList from './CreateTaskList';
import TaskLists from './TaskLists';
import {updateTask} from '../../store/tasks'

const TaskDropdownMenu = props =>{
    const [toggleMenu, setToggleMenu] = useState(false)
    const [selectedList, setSelectedList] = useState(null)

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

    useEffect(()=>{
        
        if (props.task.list){ 
            setSelectedList(props.task.list)
        } else {
            setSelectedList({id: 0, name: 'My Tasks'})
        }
    },[props.task.list]) 


    const handleListClick = (list) =>{
        const taskObj = {
            id: props.task.id,
            list_task_attributes: {
                list_id: list.id, 
            } 
        }
        dispatch(updateTask(taskObj))
    } 



    return (
    <div className='my__tasks-container'>
        <div onClick={handleOpen}><ThreeDotsVertical /></div>
        {toggleMenu ? 
            <div className='task__dropdown' ref={refMenu}>
                <div className='my__tasks-list-container'>
                    <div className='my__tasks-list-top'>Top</div>
                    <div className='my__tasks-list-mid'>
                        <TaskLists handleListClick={handleListClick} selectedList={selectedList} />
                    </div>
                    <div className='my__tasks-list-bottom'><CreateTaskList /></div>
                </div>
            </div>
            : null 
        } 

    </div>
    )
}

export default TaskDropdownMenu 



{/* <div className='my__tasks-list-container'>
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
</div> */}