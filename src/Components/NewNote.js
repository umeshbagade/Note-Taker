import { useState } from 'react';
import './NewNote.css';
const NewNote = (props) => {

    const [taskName, setTaskName] = useState("")
    const addTaskHandler = (e)=>{
        e.preventDefault();

        if( taskName===""){
            return;
        }
        const  newTask = {
            id:Math.round( Math.random()*100).toString(),
            name: taskName
        }
        props.addNewTask(newTask)
        setTaskName("")
    }
    return (  
        <div className="get-input">
          
            <form onSubmit={addTaskHandler}>

                <input type="text" onChange={(e)=>{setTaskName(e.target.value)}} value={taskName} />
                <button>Add</button>

            </form>
        </div>
    );
}
 
export default NewNote;