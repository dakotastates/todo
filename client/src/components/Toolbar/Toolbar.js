import React from "react"; 
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

import './Toolbar.css'

const Toolbar = props =>{
    return (
        <header className='toolbar'>
            <nav className='toolbar__navigation'>
                <div>
                    <DrawerToggleButton click={props.drawerToggleClickHandler} />
                </div>
                <div className='toolbar__logo'>LOGO</div>
                <div className='spacer' />
                <div className='toolbar__navigation-items'>
                    <ul>
                        <li>HOME</li>
                        <li>TODO LIST</li>
                        <li>CALENDAR</li>
                        <li>PROFILE</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
} 

export default Toolbar; 