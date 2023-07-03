import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const [button, setButton] = useState("Enable darkmode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "rgb(11 11 79)";
      setButton("Enable lightmode");
      showAlert("Darkmode enabled","Success: ");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      setButton("Enable darkmode");
      showAlert("Lightmode enabled","Success: ");
    }
  }  
  return (
  <>
  <Navbar title="TextUtils" aboutText="About" mode={mode} buttonText={button} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-2'>
    <Textform heading="Enter Text Here to Analysis Below" mode={mode} showAlert={showAlert}/>
  </div>
  </>
  );
}

export default App;
