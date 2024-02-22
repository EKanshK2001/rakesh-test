import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const taskList = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    height: '91vh',
    overflow: 'auto'
}

const task = {
        color: 'yellow',
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
        height: '10%',
        alignItems: 'center',
}

const taskName = {
    width: '94%',
    backgroundImage: 'linear-gradient(0deg, red, transparent)',
    fontVariant: 'all-petite-caps',
    height: '100%',
    textAlign:'center',
    borderRadius:'50px 0 0 50px'
}

const toggleBtn = {
    background: 'green',
    height: '100%',
    width: '6%',
    borderRadius: '0 50px 50px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    cursor:'pointer'
}

export default function TaskList() {
    const location = useLocation();
    const data = location.state.tasks;

    const [taskDone, setTaskDone] = useState([]); 

    const handelBtn = (event)=>{

        // setTaskDone()

        // console.log(data[event.target.key]);
        console.log(event.target.key);
        event.target.parentElement.firstChild.style.backgroundImage = 'linear-gradient(0deg, green, transparent)';
        event.target.parentElement.firstChild.style.textDecoration = 'line-through';      
        event.target.style.display = 'none';
    }
  return (
    <div style={taskList}>
      {data.map((e, i)=>(
        <div style={task}>
            <div style={taskName}>
                <h1 >{e}</h1>
            </div>
            <h5 key={i} style={toggleBtn} onClick={handelBtn}>Done</h5>
        </div>
      ))}
    </div>
  )
}
