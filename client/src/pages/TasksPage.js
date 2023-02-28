import {useEffect} from 'react'
import Tasks from '../components/Tasks/Tasks'
import {useDispatch, useSelector} from 'react-redux'
import {getTasks} from '../store/tasks'

const TasksPage = props =>{

    const dispatch = useDispatch()
    const { tasks } = useSelector(state => state.tasks) 

    if (tasks) {
        // const ct = tasks.filter(task=>task.completed) 
        console.log(' Tasks', tasks)
      }

    useEffect(()=>{
        dispatch(getTasks()) 
    },[])


    return(
        <><Tasks tasks={tasks} /></>
    )

}

export default TasksPage