
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, {useState} from 'react';

function App() {
  const [mode,setmode] = useState('light');
 const toggleMode = ()=>{
  if(mode === 'light')
  {
    setmode('dark')
    document.body.style.backgroundColor='black';
  }
  else{
    setmode('light')
    document.body.style.backgroundColor='white';
  }
 }
  return (
    <>
   <Navbar title="TextUtiils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
   <div class="container">
   
   <TextForm mode={mode}/>
   </div>
    </>
    
  );
}

export default App;
