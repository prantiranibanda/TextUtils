import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const [button, setButton] = useState("Enable darkmode");
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "rgb(11 11 79)";
      setButton("Enable lightmode");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      setButton("Enable darkmode");
    }
  }  
  return (
  <>
  <Navbar title="TextUtils" aboutText="About" mode={mode} buttonText={button} toggleMode={toggleMode}/>
  <div className='container my-2'>
    <Textform heading="Enter Text Here to Analysis Below" mode={mode}/>
  </div>
  </>
  );
}

export default App;
