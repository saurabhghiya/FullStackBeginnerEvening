import { useState } from "react";

export default function Form(){
    let [firstName,setFirstName] = useState('');
    let [lastName,setLastName] = useState('');


    let handleChange = (e) => {
        if(e.target.id === 'first-name')
            setFirstName(e.target.value);
        if(e.target.id === 'last-name')
            setLastName(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName,lastName);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input id='first-name' onChange={handleChange} type="text" value = {firstName} />
                <label>Last Name</label>
                <input id='last-name' onChange={handleChange} type="text" value = {lastName} />
                <button type="submit">Submit</button>
            </form>

            
        </div>
    );
}