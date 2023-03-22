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

    useEffect(()=>{
        dispatch(getTasks())
    },[])   




    // useEffect(()=>{ 
    //     setLoading(true)
    //     dispatch(getLists()).then(()=>{
    //         setLoading(false)
    //     })
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