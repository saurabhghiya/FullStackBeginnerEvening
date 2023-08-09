import { useTransition } from "react";
import { useState } from "react"


export default function List(){
    let [input, setInput] = useState('');
    let [list,setList] = useState([]);

    let[isPending,startTransition] = useTransition();

    const LIST_SIZE = 15000;

    let handleChange = (e)=>{
        setInput(e.target.value);
        startTransition(()=>{
            let newList = new Array(LIST_SIZE);
            newList.fill(e.target.value);
            setList(newList);
        })
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleChange} />
            {isPending? <h3>LOADING...</h3> : list.map((item)=>{
                return <li>{item}</li>
            })}
        </div>
    )
}