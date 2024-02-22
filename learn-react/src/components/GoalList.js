import React, { useState } from 'react'
import ToDoList from './ToDoList';

const goals = {

}

const goalButton = {
  padding: "3px 5px",
  marginRight: "25px",
  fontWeight: "600",
  borderRadius: "5px",
  cursor: "pointer",
  width:"8%"
}

export default function GoalList() {
  // let [flag, setFlag] = new useState(false);


    // let [data, setData] = new useState([]);
    // setData(...)


  const handleToggle = (event)=>{
    event.preventDefault();
    
    if(event.target.innerHTML === 'Done'){
      // setFlag(true);
      event.target.parentElement.style.background = "green";
      event.target.nextElementSibling.style.textDecoration = "line-through";
      event.target.innerHTML = 'Undone';
    }
    else{
      // setFlag(false);
      event.target.parentElement.style.background = "red";
      event.target.nextElementSibling.style.textDecoration = "none";
      event.target.innerHTML = 'Done';
    }
    // console.log(list);
  }

  return (

//       (!data)
// ?
//         <>
//       <h2>Hi, i wil have a bunch of Goals.</h2>

//       <ul style={goals}> 
//        <li className='goalList'><button style={goalButton} onClick={event => handleToggle(event)}>Done</button> <h5>sarvesh kumar Roy</h5></li>
//          {toDo.map((e)=>(
//           <li className='goalList'><button style={goalButton} onClick={event => handleToggle(event)}>Done</button> <h5>{e}</h5></li>
//         ))} 
//       </ul>
//         </>
// :  

<div style={{height:"90vh"}}>
      <div className="noData"></div>
    </div>

  )
}
