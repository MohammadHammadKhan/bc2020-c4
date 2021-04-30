import React from 'react';
import ReactDOM from 'react-dom';
import numberReducer from './numberReducer'
function Child2(){
    let [state,dispatch]= React.useReducer(numberReducer,52)
    return <div>Child2 {state}
    <button onClick={()=>{dispatch({type:'INCREMENT',value:5})}}>INCREMENT</button>
    <button onClick={()=>{dispatch({type:'DECREMENT',value:10})}}>DECREMENT</button></div>
}

export default Child2;