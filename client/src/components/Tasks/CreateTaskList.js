import {useState, useRef, useEffect} from 'react'
import { Plus } from 'react-bootstrap-icons';
import {useDispatch} from 'react-redux'
import {createList} from '../../store/lists'

const CreateTaskList = () =>{
    const [toggleModal, setToggleModal] = useState(false)
    const [listName, setListName] = useState('')

    const refModal = useRef(null) 
    const dispatch = useDispatch()

    const handleOpenModal = () =>{
        setToggleModal(!toggleModal)
    }

    const closeOpenModal = e =>{
        if(!refModal.current?.contains(e.target)){
            setToggleModal(false) 
            setListName('')
        }
    } 

    useEffect(()=>{
        document.addEventListener('click', closeOpenModal, true)
    },[])  

    const handleSubmit = e =>{
        const listObj = {
            name: listName
        }
        dispatch(createList(listObj)).then(()=>{
            closeOpenModal()
        })
    }

    return(
        <>
        <div className='my__tasks-list-item' onClick={handleOpenModal}>
            <div className='my__tasks-list-icon'><Plus /></div>
            <div className='my__tasks-list-text'>Create new list</div>
            <div className='spacer' />
        </div>
        { toggleModal ?
        <div  className="modal" >
            <div className="modal-content" ref={refModal}>
                    <div className='list__form'>
                        <p>Create new list</p>
                        <input className='list_form-input' type='text' placeholder='Enter name' value={listName} onChange={e=>setListName(e.target.value)} />
                        <div className='list__form-buttons'>
                            <div className='list__form-button-close' onClick={handleOpenModal}>Cancel</div>
                            <div className='list__form-button-done' onClick={handleSubmit}>Done</div>
                        </div>
                    </div>
                
            </div>
        </div> 
        : 
        null
        }
        </>
    )
} 
export default CreateTaskList