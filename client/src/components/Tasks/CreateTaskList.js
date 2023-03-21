import {useState, useRef, useEffect} from 'react'
import { Plus } from 'react-bootstrap-icons';
import {useDispatch} from 'react-redux'
import {createList} from '../../store/lists'

const CreateTaskList = () =>{
    const [toggleModal, setToggleModal] = useState(false)
    const refModal = useRef(null) 
    const dispatch = useDispatch()

    const handleOpenModal = () =>{
        setToggleModal(!toggleModal)
    }

    const closeOpenModal = e =>{
        if(!refModal.current?.contains(e.target)){
            setToggleModal(false)
        }
    } 

    useEffect(()=>{
        document.addEventListener('click', closeOpenModal, true)
    },[]) 

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
                <span className="close" onClick={handleOpenModal}>&times;</span>
                <p>Some text in the Modal..</p>
            </div>
        </div> 
        : 
        null
        }
        </>
    )
} 
export default CreateTaskList