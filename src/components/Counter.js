import React from 'react';

//renders props
//dumb component 
const Counter = (props) => {
    return (
        <div>
        <button onClick={props.decrement}>-</button>
         {props.count} 
         <button onClick={props.increment}>+</button>   
        </div>
    )
};

export default Counter; 