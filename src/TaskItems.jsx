import { useState } from 'react';
import './TaskItems.css';
export default function TaskItems({id,text,completed,time,onDelete}){
    const [complete,setcomplete]= useState(completed);
    const handleCheck=()=>{
        setcomplete(!complete);
    }
    const handleDelete=()=>{
        onDelete(id);
    }
    return (
    <div key = {id} className="TaskItems">
       <div className="checkbox">
       <img onClick={handleCheck} style={{ background: complete ? "green" : "transparent" }} src="./src/assets/check.png" />
       </div>
       <h2 className="TaskName">{text}</h2>
       <h2 className="TaskTime">{time}</h2>
       <img onClick={handleDelete} className="delete" src="./src/assets/delete.png"  />
    </div>)
}