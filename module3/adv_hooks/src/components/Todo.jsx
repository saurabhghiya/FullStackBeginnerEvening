import { useState } from "react";
import uuid from 'react-uuid';
import {TiTick, TiTrash} from 'react-icons/ti';



const Todo = () => {
  const [list, setList] = useState([]);

  const [task, setTask] = useState({
      title: "",
      by: ""
    });
  
  const handleTask = (e) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    setTask({...task, [key]: value});
  }

  const addTask = () => {
    console.log(task);
    console.log(uuid());
    const updated = {...task, "id": uuid(), "isDone": false}
    console.log(updated);
    setList([...list, updated]);
  }

  const markDone = (id) => {
    console.log(`Task with ${id} is done!`);
    const index = list.findIndex((task) => task.id === id);
    const doneTask = [...list];
    doneTask[index].isDone = true;
    setList(doneTask);
  }

  const deleteTask = (id) => {
    console.log(`Task with ${id} to remove!`)
    const filteredTask = list.filter((task) => task.id !== id);
    setList([...filteredTask]);
  }

  return (
    <>
      <div style={{ maxWidth:'600px' }} >
        <h1>My TodoList</h1>
        <div>
          I want to do <input type="text" name="title" onChange={handleTask}/> by{" "}
          <input type="date" name="by" onChange={handleTask} />
          <button className="wishBtn" onClick={addTask}>Add a Task</button>
        </div>
        <ul style={{ width:'fit-content', margin:'20px auto'}} >
          {list.map((item) => (
            <li key={item.id} style={{ backgroundColor:'#eee',margin:'10px',display:'flex',alignItems:'center',justifyContent:'flex-end', padding:'5px 20px',borderRadius:'20px' }}>
              <span style={{ textDecoration: item.isDone ? "line-through" : "" }}>
                <strong>{item.title}</strong> is due by {item.by}</span>
              <span><TiTick size={26} onClick={() => markDone(item.id)} /></span>
              <span><TiTrash size={26} onClick={() => deleteTask(item.id)}/></span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;