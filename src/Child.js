import React from 'react'
import ReactDOM from 'react-dom'

function Child({num,setNumber}){
return <div>Child {num}
<br/>
<button onClick={()=>setNumber(++num)}>Update from Child</button></div>
}
export default Child;