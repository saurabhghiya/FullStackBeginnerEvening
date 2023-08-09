import { useReducer } from "react";
import { TiTick,TiTrash } from "react-icons/ti";
import { formReducers, taskReducers } from "./reducers";

export default function TodoReducer(){
    let [list,dispatchList] = useReducer(taskReducers,[]);
    let [form, dispatchForm] = useReducer(formReducers, {
        title: "",
        by: ""
    });

    const handleTask = (e) => {
        e.preventDefault();
        dispatchForm(
            {
                type: 'HANDLE_TASK',
                field: e.target.name,
                payload: e.target.value
            }
        );
    }

    return(
        <>
            <div style={{ maxWidth: '600px' }} >
                <h1>My TodoList</h1>
                <div>
                    I want to do <input type="text" name="title" onChange={handleTask} /> by{" "}
                    <input type="date" name="by" onChange={handleTask} />
                    <button className="wishBtn" onClick={()=> dispatchList({type:'ADD_TASK', payload:form})}>Add a Task</button>
                </div>
                <ul style={{ width: 'fit-content', margin: '20px auto' }} >
                    {list.map((item) => (
                        <li key={item.id} style={{ backgroundColor: '#eee', margin: '10px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '5px 20px', borderRadius: '20px' }}>
                            <span style={{ textDecoration: item.isDone ? "line-through" : "" }}>
                                <strong>{item.title}</strong> is due by {item.by}</span>
                            <span><TiTick size={26} onClick={() => dispatchList({type:'DONE_TASK', payload:item.id})} /></span>
                            <span><TiTrash size={26} onClick={() => dispatchList({type:'REMOVE_TASK', payload:item.id})} /></span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}