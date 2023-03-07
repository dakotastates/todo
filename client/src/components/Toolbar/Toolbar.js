import {useState} from "react"; 
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Plus, Bell, Person, House } from 'react-bootstrap-icons';
import ToolbarDropdown from "./ToolbarDropdown";
// import { Link } from 'react-router-dom';


import './Toolbar.css'

const Toolbar = props =>{
    const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false)
    const [selectedDropdownMenu, setSelectedDropdownMenu] = useState(null)

    const handleToggleDropdownMenu = target=>{
        setSelectedDropdownMenu(target)
        setToggleDropdownMenu(!toggleDropdownMenu)
    }

    return (
        <header className='toolbar'>
            <nav className='toolbar__navigation'>
                <div className='toolbar__toggle-button'>
                    <DrawerToggleButton click={props.drawerToggleClickHandler} />
                </div>
                <div className='toolbar__logo'>LOGO</div>
                <div className='spacer'></div>
                <div className='toolbar__navigation-items'>
                    <ul>
                        <li></li>
                        <li><Plus /></li>
                        <li><Bell onClick={()=>handleToggleDropdownMenu('notif')} /></li>
                        <li><Person onClick={()=>handleToggleDropdownMenu('profile')} /></li>
                    </ul>
                    <ToolbarDropdown toggleDropdownMenu={toggleDropdownMenu} setToggleDropdownMenu={setToggleDropdownMenu} selectedDropdownMenu={selectedDropdownMenu} />
                </div>
            </nav>
        </header>
    );
} 

export default Toolbar; 