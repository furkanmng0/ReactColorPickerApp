import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material';

function App() {
  const [color,setColor]=useState("white");
  const colors=["red", "green", "blue", "yellow", "purple", "orange"];
  
  return (
  <div className='container' style={{backgroundColor:color}}>
    
    <input
  type="color"
  value={color}
  onChange={(e) => setColor(e.target.value)}
  style={{ marginTop: "20px", width: "60px", height: "40px", border: "none", cursor: "pointer" }}
/>



    <h2>Renk seçici</h2>
    <div className='buttons'> 
      {colors.map((c)=>(
        <button 
        key={c}
        onClick={()=>setColor(c)}
        className='color-btn'
        style={{backgroundColor:c}}
        >
          {c}
        </button>
      ) )}
    </div>

    <div className='explanation'>
      <p> <strong>Seçilen renk: {color}</strong>  </p>
    </div>

    <div>
      <button className='btn-reset' onClick={()=>setColor("white")} >
        Reset
      </button>
    </div>


  </div>
  )
}

export default App
