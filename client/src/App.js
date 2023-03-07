import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
// import Todos from "./components/Todos/Todos";
import RightSideDrawer from "./components/SideDrawer/RightSideDrawer";
import HomePage from "./pages/HomePage";
import CalendarPage from './pages/CalendarPage'
import TasksPage from "./pages/TasksPage";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import { useSelector} from 'react-redux'

import "./App.css";


function App() {  
  const [drawerToggle, setDrawerToggle] = useState(true)
  const [rightDrawerToggle, setRightDrawerToggle] = useState(false) 

  const { user } = useSelector(state => state.user)
  

  const drawerToggleClickHandler = () =>{
    setDrawerToggle(!drawerToggle)
  } 

  const righDrawerClickHandler = () =>{
    setRightDrawerToggle(!rightDrawerToggle)
  }  


  let rightDrawerToggleBtnClasses = 'right-drawer-toggle__button'
  
  if(!rightDrawerToggle){
    rightDrawerToggleBtnClasses = 'right-drawer-toggle__button closed'
  }

  let mainContainerClasses = 'main-container'

  if (drawerToggle){
    mainContainerClasses = 'main-container open'
  } 






  return (
    <>
    <Router>
    {user ? 
      <div className='App'>
        <Toolbar drawerToggleClickHandler = {drawerToggleClickHandler}/>

        <div className={mainContainerClasses}>
        <SideDrawer show={drawerToggle} />
        <div className='main-content'> 
          <Routes>
            <Route path='/tasks' element={<><TasksPage /></>} />
            <Route path='/calendar' element={<><CalendarPage/></>} />
            <Route path='/' element={<><HomePage/></>} />
            <Route path="*" element={<><NotFound/></>}/>
          </Routes>
          </div>
          <div onClick={righDrawerClickHandler} className={rightDrawerToggleBtnClasses}>{rightDrawerToggle ? `>` : `<`}</div>
          <RightSideDrawer show={rightDrawerToggle} />
        </div> 
      </div>
      : 
      <div className='app__auth-page'>
        <Routes>
          <Route path='/' element={<><AuthPage /></>} />
          <Route path="*" element={<><NotFound/></>}/>
        </Routes>
      </div>
    }
    </Router>
    </>
  );
}

export default App;  
