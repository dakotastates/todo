import {useState, useEffect} from 'react'
import Tasks from '../components/Tasks/Tasks'
import {useDispatch, useSelector} from 'react-redux'
import {getTasks} from '../store/tasks'
import {getLists, setSelectedList} from '../store/lists'

const TasksPage = props =>{

    const dispatch = useDispatch()
    const { tasks } = useSelector(state => state.tasks) 
    const { lists, selectedList } = useSelector(state => state.lists) 
    const [loading, setLoading] = useState(false)

    // useEffect(()=>{
    //     // setLoading(true)
    //     dispatch(getLists()).then(()=>{
    //         // setLoading(false)
    //     })
    // },[]) 

    useEffect(()=>{
        // setLoading(true)
        dispatch(getTasks()).then(()=>{
            // setLoading(false)
        })
    },[])   




    useEffect(()=>{
        // setLoading(true)
        dispatch(getLists()).then(()=>{
            // dispatch(setSelectedList(lists[0])).then(()=>{
            //     setLoading(false)
            // })
            
        })
    },[])  

    // if (lists[0]){      
    //     dispatch(setSelectedList(lists[0])).then(()=>{
    //         setLoading(false)
    //     })
    // } else {
    //     const newListObj = {
    //         name: 'My Tasks'
    //     }
    //     console.log('create list', newListObj)
    //     // dispatch(setSelectedList(lists[0]))
    // } 

    // useEffect(()=>{
    //     setLoading(true)
        // if (lists){      
        //     dispatch(setSelectedList(lists[0])).then(()=>{
        //         setLoading(false)
        //     })
        // } else {
        //     const newListObj = {
        //         name: 'My Tasks'
        //     }
        //     console.log('create list', newListObj)
        //     // dispatch(setSelectedList(lists[0]))
        // } 
    // },[])




   if (loading){
        return(
            <>Loading...</>
        )
    } else {
        return(
            <><Tasks tasks={tasks} /></>
        )
    }

}

export default TasksPage