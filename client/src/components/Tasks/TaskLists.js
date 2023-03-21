import {useEffect} from 'react'
import { Check2 } from 'react-bootstrap-icons';
import {useDispatch, useSelector} from 'react-redux'
import {getLists} from '../../store/lists'

const TaskLists = props =>{

    const dispatch = useDispatch()
    const { lists } = useSelector(state => state.lists) 

    // useEffect(()=>{
    //     dispatch(getLists()) 
    // },[]) 

    return(
        <ul>
            {lists?.map(list => (
            <li key={list.id} onClick={()=>props.handleListClick(list)}>
                <div className='my__tasks-list-item'>
                    <div className='my__tasks-list-icon'>{(props.selectedList?.id == list.id ) ? <Check2 /> : null}</div>
                    <div className='my__tasks-list-text'>{list.name}</div>
                    <div className='spacer' />
                </div>
            </li>
            ))}
        </ul>
    )
} 

export default TaskLists


{/* <li onClick={()=>props.handleListClick({id: 0, name: 'My Tasks'})}>
<div className='my__tasks-list-item'>
    <div className='my__tasks-list-icon'>{(props.selectedList.id == 0) ? <Check2 /> : null}</div>
    <div className='my__tasks-list-text'>My Tasks</div>
    <div className='spacer' />
</div>
</li> */}