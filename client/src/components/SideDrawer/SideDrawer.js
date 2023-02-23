import React from "react";
import { Inbox, Calendar, Plus } from 'react-bootstrap-icons';


import './SideDrawer.css'; 

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'; 
    if (props.show){
        drawerClasses = 'side-drawer open';
    } 
    return (
     <nav className={drawerClasses}>
        <ul>
            <li>
                <div className='side-drawer__icon'><Inbox /></div>
                <div className='side-drawer__icon-text'>Inbox</div>
            </li>
            <li>
                <div className='side-drawer__icon'><Calendar /></div> 
                <div className='side-drawer__icon-text'>Calendar</div>
            </li>
            <li>
                <div className='side-drawer__icon'><Plus /></div> 
                <div className='side-drawer__icon-text'>Plus</div>
            </li>
        </ul>
    </nav>
)}

export default SideDrawer; 