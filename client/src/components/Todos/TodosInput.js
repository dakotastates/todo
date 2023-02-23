import {useState} from 'react'; 
import './Todos.css';

const TodosInput = props => { 
    const [inputToggle, setInputToggle] = useState(false) 

    return( 
        <div className='input__container'>
            <div className='input__form'>Input</div>
            <div className='input__text'>Text</div>
        </div>
    )
} 

export default TodosInput; 