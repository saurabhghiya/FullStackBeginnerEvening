import uuid from "react-uuid";

let taskReducers = (currState,action) => {
    switch(action.type){
        case 'ADD_TASK':{
            const newTask = { ...action.payload, "id": uuid(), "isDone": false }
            return [...currState, newTask];
        }
        case 'REMOVE_TASK':{
            const filteredTask = currState.filter((task) => task.id !== action.payload);
            return filteredTask;
        }
        case 'DONE_TASK':{
            const index = currState.findIndex((task) => task.id === action.payload);
            const doneTask = [...currState];
            doneTask[index].isDone = true;
            return doneTask;
            
        }
    }
}

let formReducers = (state,action) => {
    switch(action.type){
        case 'HANDLE_TASK':{
            return {
                ...state,
                [action.field]: action.payload
            }
        }
        default: 
        return state
    }
}

export {formReducers,taskReducers};