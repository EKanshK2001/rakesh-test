import React, { useState } from 'react'


const inputs = {
  height : "20%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between"
}

const heading = {
  padding: "5px 10px",
  width: "35vw",
  borderWidth: "thick",
  borderRadius: "22px",
  fontSize: "large"
}

const enterForm = {
  display: "flex",
  justifyContent: "space-between",
  width: "50vw",
  alignItems:'center'
}

const days = {
  fontSize: "large",
  borderWidth: "thick",
  borderStyle: "double",
  outline: "none"
}

const actionBtn = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const clock = {
  fontSize: "large",
  borderStyle: "double",
  borderWidth: "thick",
  outline: "none"
}

const inputName = {
  fontSize: "medium",
  outline: "none",
  padding: "5px 5px",
  borderStyle: "ridge",
  borderWidth: "thick"
}

const addBtn = {
  padding: "5px 20px",
  cursor: "pointer",
  borderRadius: "10px"
}

const submitBtn = {
  padding: "7px 9px",
  borderRadius: "10px"
}

export default function PersonalRoutine() {

  // let [day, setDay] = new useState('Monday');
  // let [time, setTime] = new useState('00:00');
  // let [name, setName] = new useState('');
  // let [list, setList] = new useState([]);

  // const handleDays = (event)=>{
  //   setDay(event.target.value);
  //   // console.log(day);
  // }

  // const handleTime = (event)=>{
  //   setTime(event.target.value);
  //   // console.log(time);
  // }

  // const handleName = (event)=>{
  //   setName(event.target.value);
  // }

  // const addFunc = (event)=>{
  //   if(name.length <= 2){
  //     alert('Target name is too sort');
  //   }
  //   else{
  //     event.preventDefault();
  //     let temp = list;
  //     temp.push({day:day, time:time, name:name});
  //     setList(temp);
  //     setDay('Monday');
  //     setTime('00:00');
  //     setName('');
  //     console.log(list);
  //   }
  // }

  // const deleteFunc =(event, key)=>{
  //   event.preventDefault();
  //   setList(list.filter((e)=> key !== list.indexOf(e)));
  // }

  const [days, setDays] = useState(0);
  const [taskList, setTaskList] = useState([]);

  const handelDays = (event)=>{
    setDays(event.target.value);
  }

  const setRow = ()=>{
  //  DayColumn();
  }

  const DayColumn = ()=>{
    const array = [];
    for(let i=0; i<days; i++){
      array.push(<input type='text' placeholder='Day'></input>);
      // document.getElementById('row').appendChild(node);
    }
    return array;
  }

  const TaskColumn = ()=>{
    const array = [];
    let divider = document.createElement('div');
    const time = document.createElement('input');
    time.setAttribute('type', 'number');
    time.setAttribute('placeholder', 'time');
    array.push(time);
    divider.appendChild(time);
    for(let i=0; i<days; i++){
      const task = document.createElement('input');
      task.setAttribute('type', 'text');
      task.setAttribute('placeholder', 'task');
      array.push(task);
    }
    // divider.appendChild(array);
    // array.push(divider);
    console.log(array);
    // setTaskList(divider);
    // const ac = divider
    return array;

  }

  const addCol =()=>{
      // TaskColumn();
  }

  return (
      <div>

          <input type="text" placeholder='enter university' />

        <div>
          <input type="number" value={days} onChange={handelDays} />
          <button onClick={setRow}>set</button>
          <button onClick={addCol}>col</button>
        </div>
         <div>

         <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>












            {/* <div>
              <DayColumn/>
            </div>

          <TaskColumn/> */}



         </div>
































    {/* <div style={inputs}>
        <div>
          <input style={heading} type="text" placeholder='personal/ profesional/ acadimic' />
        </div>

<div style={enterForm}>
    <form>
        <select name="routine" id="routine" style={days} value={day} onChange={handleDays}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thrusday">Thrusday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
    </form>

        <input type="text" placeholder='Enter Task...' style={inputName} value={name} onChange={handleName}/>

        <legend><input type="time" name="time" style={clock} value={time} onChange={handleTime}/></legend> 

  </div>

<div style={actionBtn}>
        <button style={addBtn} onClick={event => addFunc(event)}>ADD</button>
        <button style={submitBtn}>SUBMIT</button>
</div>
</div>

<div className='wrapper'>

{list.map((e, index)=>(
    <div className='list' > 
    <div className='task'> <span>{e.name + ' is on ' + e.day + ' at ' + e.time}</span> </div>
    <div className='buttons'>
    <button className='editBtn' key={index}>edit</button>
    <button className='deleteBtn' key={index} onClick={event => deleteFunc(event, index)}>delete</button></div>
    </div>
  ))}
  
  </div> */}
</div>
  )
}
