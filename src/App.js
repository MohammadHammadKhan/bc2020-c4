import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
import Valuecontext from './Valuecontext';
import React from 'react'
function App() {
  let value=React.useState(55)
  return (
     <Valuecontext.Provider value={value} >
        <div>Hello world from App.js
          <Parent/>
        </div>
     </Valuecontext.Provider>

  );
}

export default App;
