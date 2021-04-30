import './App.css';
import Parent from './Parent'
import React, {useState} from 'react'

function App() {
  let [number,setNUmber]=useState(45)
  return (
    <div>
      Hello world from APP.JS
      <Parent num={number}/>
      <button onClick={()=>setNUmber(++number)}>Update</button>
    </div>
  );
}

export default App;
