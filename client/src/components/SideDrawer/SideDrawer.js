import React from "react";
import { House, Calendar, CardList, PersonLinesFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


import './SideDrawer.css'; 

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'; 
    if (props.show){
        drawerClasses = 'side-drawer open';
    } 
    return (
     <nav className={drawerClasses}>
        <ul>
            <Link to='/'>
              <li>
                <div className='side-drawer__icon'><House /></div>
                <div className='side-drawer__icon-text'>Home</div>
              </li>
            </Link>
            <Link to='/tasks'>
              <li>
                <div className='side-drawer__icon'><CardList /></div>
                <div className='side-drawer__icon-text'>Tasks</div>
              </li>
            </Link>
        
            <Link to='/calendar'>
                <li>
                    <div className='side-drawer__icon'><Calendar /></div> 
                    <div className='side-drawer__icon-text'>Calendar</div>
                </li>
            </Link>
            <Link to='/contacts'>
                <li>
                    <div className='side-drawer__icon'><PersonLinesFill /></div> 
                    <div className='side-drawer__icon-text'>Contacts</div>
                </li>
            </Link>

        </ul>
    </nav>
)}

export default SideDrawer; 