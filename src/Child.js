import React from 'react';
import ReactDOM from 'react-dom';
import Valuecontext from './Valuecontext';

function Child(){
    let value=React.useContext(Valuecontext)
    return <div>
        
        Child {value[0]}
        <br/>
       <button onClick={()=>value[1](++value[0])}>INC FROM CHILD</button>
       <button onClick={()=>value[1](--value[0])}>DEC FROM CHILD</button>
       </div>
}

export default Child;