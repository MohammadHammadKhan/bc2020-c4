import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child'
import Child2 from './Child2'
function Parent(){
    return <div>Parent
        <Child/>
        <Child2/>
    </div>
}

export default Parent;