import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child'
import Valuecontext from './Valuecontext'
function Parent(){
    let value=React.useContext(Valuecontext)
    return <div>Parent {value}
        <Child/>
    </div>
}

export default Parent;