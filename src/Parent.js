import React from 'react'
import ReactDOM from 'react-dom'
import Child from './Child'
function Parent(props){
return <div>Parent
    <Child num={props.num}/>
</div>
}
export default Parent;