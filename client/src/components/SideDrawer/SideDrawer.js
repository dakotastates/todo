import React from "react";

import './SideDrawer.css'; 

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'; 
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
     <nav className={drawerClasses}>
        <ul>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
        </ul>
    </nav>
)}

export default SideDrawer; 