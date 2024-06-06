
import { useState } from 'react';
import './Form.css';
export default function Form({handleAddTask}){
    const [taskName, setTaskName] = useState("");
    const [error, setError] = useState("");
    const handleTaskNameChange = (event) => {
        setTaskName(event.target.value);
    };
    const handleAdd=()=>{
        if (!taskName.trim()) {
            setError("Task name cannot be empty !!!!");
            return;
          }
        handleAddTask(taskName);
        setTaskName("");
        setError("");
    }
    
    return(
      <>
       <div className='Formfield'>
        <input  className="Task" type="text" placeholder="Task Name" value={taskName} 
                onChange={handleTaskNameChange} />
        <button className='IconButton' ><img src="./src/assets/schedule.png"  /></button>
        <button  onClick={handleAdd} className='IconButton' ><h2>Add</h2></button>
       </div>
       {error && <p className="error" style={{color:"red"}}>{error}</p>}
       </>
    )
}