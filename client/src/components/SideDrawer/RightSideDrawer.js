import './RightSideDrawer.css';  
import { useLocation, useParams } from 'react-router-dom' 
import TasksDrawer from '../Tasks/TasksDrawer';
import CalendarDrawer from '../Calendar/CalendarDrawer';


const RightSideDrawer = props =>{
    const location = useLocation();
    const params = useParams()

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
