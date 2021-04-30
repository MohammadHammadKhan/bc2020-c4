import './App.css';
import Parent from './Parent'
import React, {useState} from 'react'

function App() {
  let [number,setNumber]=useState(45)
  return (
    <div>
      Hello world from APP.JS
      <Parent num={number} setNumber={setNumber}/>
      <button onClick={()=>setNumber(++number)}>Update from App..</button>
    </div>
  );
}

export default App;
