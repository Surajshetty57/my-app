// import logo from './logo.svg';
// import About from './About';
import './App.css';
import Main from './Main';
import Navbar from './Navbar';
import React, { useState } from 'react'
import Alert from './Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [Text, setText] = useState('dark');
  const [toggle, settoggle] = useState("Enable Dark Mode")
  const [alert, setalert] = useState(null)

  const showAlert = (state, msg) => {
    setalert({
      state: state,
      message: msg
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  
  const changeMode = () => {
    if (mode === "light") {
      setmode('dark');
      setText('light')
      settoggle("Enable Light Mode")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode enabled", "success")
    }
    else {
      setmode('light')
      setText('dark')
      settoggle("Enable Dark Mode")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode enabled", "success")
    }

  }
  return (
    // <Router>
    //   <Navbar title="Text Editor📝" toggleMode={changeMode} mode={mode} text={Text} toggle={toggle} />
    //   <Alert alert={alert} />
    //   <Routes>
    //     <Route path="" element={<Main heading="Convert to UpperCase" mode={mode} alert={showAlert} />}></Route>
    //     <Route path="/about" element={<About />}> </Route>
    //   </Routes>
    // </Router>

    <>
    <Navbar title="Text Editor📝" toggleMode={changeMode} mode={mode} text={Text} toggle={toggle} />
      <Alert alert={alert} />
      <Main heading="Convert to UpperCase" mode={mode} alert={showAlert} />
    </>

  );
}

export default App;
