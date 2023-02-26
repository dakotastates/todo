import Task from "./Task";
import './Tasks.css'

const Tasks = props =>{ 

    const data = [
        {
            id: 1,
            date: '2/23/23' ,
            task: 'clean room', 
            category: 'personal',
            priority: 'Minor/low', 
            completed: false

        },
        {
            id: 2,
            date: '2/24/23' ,
            task:'make dinner',
            category: 'personal',
            priority: 'Major/high', 
            completed: true
        },
        {
            id: 3,
            date: '2/23/23' ,
            task: 'order tickets',
            category: 'work', 
            priority: 'Critical/severe', 
            completed: false
        }, 
        {
            id: 4,
            date: '2/23/23' ,
            task: 'Buy Groceries',
            category: 'personal', 
            priority: 'Medium/moderate', 
            completed: false
        }, 
        {
            id: 5,
            date: '2/23/23' ,
            task: 'Pet a dog',
            category: 'work',
            completed: false
        }
    ]

    return(
        <div className='tasks-container'>
            <div className='tasks__date'>Today</div>
            <div className='tasks__list'>
                 {data.map(task => (
                    <Task key={task.id} task={task} />
                 ))}
            </div> 

        </div>
    )
} 

export default Tasks;