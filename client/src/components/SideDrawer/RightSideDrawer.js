import './RightSideDrawer.css';  

const RightSideDrawer = props =>{

    let rightDrawerClasses = 'right-side-drawer'; 
    if (props.show){
        rightDrawerClasses = 'right-side-drawer open';
    } 

    return(
        <div className={rightDrawerClasses}>
            <div className='right-side-drawer__text'>Completed Tasks</div>
            <div className='right-side_drawer__content'>
                <ul>
                    <li>task 1</li>
                    <li>task 2</li>
                    <li>task 3</li>
                </ul>
            </div>
        </div>
    )
} 

export default RightSideDrawer
