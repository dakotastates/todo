import Task from "./Task";
import './Todos.css'

const Todos = props =>{ 

    const data = [
        {
            id: 1,
            date: '2/23/23' ,
            task: 'clean room', 
            category: 'personal',
            priority: 'Minor/low'

        },
        {
            id: 2,
            date: '2/24/23' ,
            task:'make dinner',
            category: 'personal',
            priority: 'Major/high'
        },
        {
            id: 3,
            date: '2/23/23' ,
            task: 'order tickets',
            category: 'work', 
            priority: 'Critical/severe'
        }
    ]

    return(
        <div className='todos-container'>
            <div className='todos__date'>Today</div>
            <div className='todos__list'>
                <ul>
                    {data.map(task => (
                        <Task task={task} />
                        ))}
                </ul>

            </div>
        </div>
    )
} 

export default Todos;