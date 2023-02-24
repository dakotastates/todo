import React, { useState, useRef } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Todos from "./components/Todos/Todos";
import TodosInput from "./components/Todos/TodosInput";

import "./App.css";


function App() {  

  const [drawerToggle, setDrawerToggle] = useState(true)
  const [todoToggle, setTodoToggle] = useState(false)

  const drawerToggleClickHandler = () =>{
    setDrawerToggle(!drawerToggle)
  } 

  const todoToggleClickHandler = () =>{
    setTodoToggle(!todoToggle)
  } 

  let mainContainerClasses = 'main-container'

  if (drawerToggle){
    mainContainerClasses = 'main-container open'
  }

  // const backdropClickHandler = () =>{
  //   setDrawerToggle(false)
  // } 

  // let backdrop;
  
  // if (drawerToggle) {
  //   backdrop = <Backdrop click={backdropClickHandler} /> 
  // } 

  // let todos;
  
  // let outputClasses = 'main-output'
  // let inputClasses = 'main-input'

  // if (todoToggle){
  //   todos = <Todos /> 
  //   outputClasses='main-output'
  //   inputClasses='main-input'
  // } else {
  //   inputClasses='main-input closed'
  //   outputClasses='main-output closed'
  // }

  return (
    <div style={{height: '100%'}}>
      
      <Toolbar 
        drawerToggleClickHandler = {drawerToggleClickHandler}
        todoToggleClickHandler = {todoToggleClickHandler}
      />

      <div className={mainContainerClasses}>
      <SideDrawer show={drawerToggle} />
      <div className='main-content'>
        <Todos />
      </div>
        
      </div>
      
    </div>
  );
}

export default App;  



{/* <div className={inputClasses}>
<TodosInput />
</div>
<div className={outputClasses}>
{todos}
</div> */}