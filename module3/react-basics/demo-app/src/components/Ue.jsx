import { useEffect, useState } from "react";

export default function Ue(){
    let [count, setCount] = useState(0);
    
    let countHandler = ()=>{
        setCount(count+1);
    }

    useEffect(() => {
        console.log('inside useEffect');
        document.title = `Updated count to ${count}`;
    }, [count] )
    //empty dependency makes sure useEffect callback runs only once on mounting phase or at start
    //if no dependency is passed then it will run on mounting as well as any state updating phase
    console.log('inside component');
    return (
        <div>
            <h1>This is my count: {count}</h1>
            <button onClick = {countHandler}>Increment</button>
        </div>
    );
}