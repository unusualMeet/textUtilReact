import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState();
  const showAlert=(message,type)=>{
    setAlert({msg:message,type:type})
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#03092d'
      document.body.style.color='white'
      showAlert("Dark mode has been enabled","success");
      setInterval(()=>{
        document.title="Dark mode is enabled";
        setInterval(()=>{
          document.title="install textUtils now";
        },2000)
      },1000);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      document.body.style.color='#1b1f22'
      showAlert("light mode has been enabled","success");
    }
  }
  return (
    <Router>
    <>
      {/* <Navbar title="TextUtils2vvbhivub" sectitle="About my self"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        
          <Routes>
  <Route exact path="/about" element={<About />} />

          <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            }
          />
        </Routes>
        
      </div>
    </>
    </Router>
  );
}
export default App;