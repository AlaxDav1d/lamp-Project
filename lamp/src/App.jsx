import { useState } from 'react';

import lamp1 from './assets/lamp1.png';
import lamp2 from './assets/lamp2.png';
import style from './App.css';
import { Switch } from '@mui/material';


function App() {
  const [imgChange,setimgChange] = useState("");
  

  function lampOn(imgChange){
    if(imgChange == true){
      setimgChange(<img src= {lamp2} className='lamp2' />)
      
    }
    else{
      setimgChange(<img src= {lamp1} className='lamp1'/>)
    }
  }

  return (
    <>
      <h1>Bonjour le monde</h1>
      <div className="imagem">
        {imgChange}
        <div className="botoes">
        
          <button onClick={() => lampOn(false)} className='a1'>desligar a lampada</button>
          <button onClick={() => lampOn(true)} className='a2'>ligar a lampada</button>
        </div>
      </div>
    </>
  )
}

export default App
