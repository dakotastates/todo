import './RightSideDrawer.css';  
import { useLocation } from 'react-router-dom' 
import TasksDrawer from '../Tasks/TasksDrawer';
import CalendarDrawer from '../Calendar/CalendarDrawer';


const RightSideDrawer = props =>{
    const location = useLocation();
    console.log(location.pathname);

    let content

    if (location.pathname == '/tasks'){
        content = <TasksDrawer />
    }  else if(location.pathname == '/calendar'){
        content = <CalendarDrawer />
    }

    let rightDrawerClasses = 'right-side-drawer'; 
    if (props.show){
        rightDrawerClasses = 'right-side-drawer open';
    } 

    return(
        <div className={rightDrawerClasses}>
            {content}
        </div>
    )
} 

export default RightSideDrawer
