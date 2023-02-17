import React, { useState, useRef } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

import "./index.css";

function App() {  

  const [drawerToggle, setDrawerToggle] = useState(false)

  const drawerToggleClickHandler = () =>{
    setDrawerToggle(!drawerToggle)
  } 

  const backdropClickHandler = () =>{
    setDrawerToggle(false)
  } 

  let sideDrawer; 
  let backdrop;
  
  if (drawerToggle) {
    sideDrawer = <SideDrawer /> 
    backdrop = <Backdrop click={backdropClickHandler} /> 
    
  }

  return (
    <div style={{height: '100%'}}>
      <h1>Speech to Text Notes App</h1> 
      <Toolbar drawerToggleClickHandler = {drawerToggleClickHandler} />
      {sideDrawer}
      {backdrop}
      <main style={{marginTop: '64px'}}>
        <p>This is the page content</p>
      </main>
      
    </div>
  );
}

export default App;  
