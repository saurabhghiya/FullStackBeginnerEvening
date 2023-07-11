import {useState} from 'react';

export default function Counter(){
    let [count,setCount] = useState(0);//useState is a hook

    function incrementHandler (){
        setCount(count+1);
    }
    function decrementHandler (){
        setCount(count-1);
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    );
}