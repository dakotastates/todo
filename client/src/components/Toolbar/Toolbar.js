import React from "react"; 
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Plus, Bell, Person, House } from 'react-bootstrap-icons';
// import { Link } from 'react-router-dom';


import './Toolbar.css'

const Toolbar = props =>{
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
                        <li><Bell /></li>
                        <li><Person /></li>
                    </ul>
                    
                </div>
            </nav>
        </header>
    );
} 

export default Toolbar; 