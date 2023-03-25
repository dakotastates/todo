import { useState, useRef, useEffect } from 'react'
import { ThreeDotsVertical, Check2 } from 'react-bootstrap-icons';
import {useDispatch, useSelector} from 'react-redux'
import { updateList, deleteList, setSelectedList} from '../../store/lists'
import Modal from '../../utils/Modal';

const ListOptionsMenu = () =>{
    const [toggleMenu, setToggleMenu] = useState(false)
    // const [closeModal, setCloseModal] = useState(false)

    const dispatch = useDispatch()
    const { lists, selectedList } = useSelector(state => state.lists)
    
    const [listName, setListName] = useState(selectedList.name)

    const refMenu = useRef(null) 
    // const refModal = useRef(null) 

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

    let listItemClasses = 'my__tasks-list-item'

    if (selectedList?.id == lists[0]?.id){
        listItemClasses = 'my__tasks-list-item disabled'
    }


    const handleListDelete = ()=>{
        return dispatch(deleteList(selectedList.id)).then(()=> setSelectedList(lists[0]))
    } 

   

    const handleListUpdate = ()=>{
        const listObj = {
            id: selectedList.id, 
            name: listName
        }
        return dispatch(updateList(listObj))
    }  

    const modalButtonUpdate = (
        <>
            <div className='my__tasks-list-text'>Rename list</div>
            <div className='spacer' />
        </>
    ) 

    const modalButtonDelete = (
        <>      
            <div className='my__tasks-list-text'>Delete list</div>
            <div className='spacer' />            
        </>
    ) 

    const modalContentUpdate = (
        <>
            <p>Update list name</p>
            <input className='list_form-input' type='text' placeholder='Enter name' value={listName} onChange={e=>setListName(e.target.value)} />
        </>
    )

    const modalContentDelete = (
        <>
            <p>Delete this list?</p>
            <p>All tasks in this list will be permanently deleted</p>
        </>
    )


    

    return(
        <div>
            <div className='my__tasks-container'>
                <div onClick={handleOpen}><ThreeDotsVertical /></div>
                {toggleMenu ? 
                    <div className='task__dropdown' ref={refMenu}>
                        <div className='my__tasks-list-container'>
                            <div className='my__tasks-list-top'>
                                Sort by:
                                    <div className='my__tasks-list-item' >
                                        <div className='my__tasks-list-icon'><Check2 /></div>
                                        <div className='my__tasks-list-text'>My Order</div>
                                        <div className='spacer' />
                                    </div>
                                </div>

                            <div className='my__tasks-list-mid'> 
                            
                                <Modal 
                                    modalContent={modalContentUpdate} 
                                    modalButton={modalButtonUpdate} 
                                    listItemClasses='my__tasks-list-item'
                                    handleClick={handleListUpdate}
                                    submitBtnText = 'Done'
                                    
                                />
                                <Modal 
                                    modalContent={modalContentDelete} 
                                    modalButton={modalButtonDelete} 
                                    listItemClasses={listItemClasses}
                                    handleClick={handleListDelete}
                                    submitBtnText = 'Delete'

                                />
                                {(selectedList.id == lists[0].id) ? <div className='my__tasks-list-text-default-message'>Can't delete default list</div> : null}
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



// {(selectedList.id == lists[0].id)  ? 
//     <>
//         <div className='my__tasks-list-item'  >
//             <div className='my__tasks-list-text'>Delete list</div>
//             <div className='spacer' />
//         </div>
//         <div>Can't delete defualt list</div>
//     </>
     
//     : 
//     <div className='my__tasks-list-item' onClick={handleDelete} >
//         <div className='my__tasks-list-text'>Delete list</div>
//         <div className='spacer' />
//     </div>
//     }