import { useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";

import {logout} from '../../store/user'

const ProfileDropdown = ()=>{ 

    // const { user } = useSelector(state => state.user)
    const dispatch = useDispatch() 
    const navigate = useNavigate();

    const handleLogout = ()=>{
        dispatch(logout())
        navigate("/")
    }

    return(
        <div>
            <ul>
                <li onClick={handleLogout}>Logout</li>
            </ul>
        </div>
    )
}
export default ProfileDropdown