import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../store/user'

const Login = props =>{
    const [error, setError] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch() 

    const handleSubmit = e =>{
        e.preventDefault()
        const authObj = {
            username: username, 
            password: password
        }
        // console.log('AuthUser:', authObj)
        dispatch(login(authObj)) 
    }

    return(
        <div className='auth__form-container'>
            <div className='auth__text-title'>Login</div>
            <div className='auth__form'>
                <form>
                    <div className='auth__form-field'>
                        <input 
                            type='text' 
                            placeholder="Username"
                            value={username}
                            onChange={e=>setUsername(e.target.value)}
                        />
                    </div>
                    <div className='auth__form-field'>
                        
                        <input 
                            type='password' 
                            placeholder="Password" 
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                        />
                    </div>

                    <div className='auth__form-field-button'>
                        <button className='auth__submit-button' disabled={!username || !password} onClick={handleSubmit}>Login</button>
                    </div>
                    <div className='auth__form-field'>
                        Need an Account? <div className='auth__toggle-button' onClick={props.toggleAuth}>Register Here</div>
                    </div>
                    

                </form>
            </div>
            {error ? 
                <div className='auth__form-bottom'>
                    {error}
                 </div>
            : null
            }

        </div>
        
    )
}

export default Login