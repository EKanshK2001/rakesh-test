import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const memberList = {
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  maxHeight: '91vh',
  alignItems: 'center'
}

const member = {
  background: 'cadetblue',
  textAlign: 'center',
  width: '90%',
  borderRadius: '15px',
  height: '110px',
  display: 'flex',
  justifyContent: 'space-between'
}

const details = {
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center'
}

const recordProgress = {
  display:"block",
  width: "80%",
  height: "22px",
  accentColor: "white"
}

const options = {
  display:'flex',
  width: '30%',
  alignItems: 'center'
}

const option = {
  display:'flex',
  width: '30%',
  alignItems: 'center',
  height: '100%',
  width: 'calc(100% / 3)',
  justifyContent: 'center',
  cursor:'pointer'
}

const setTask ={
  height: '90%',
  width: '90%',
  // display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly'
}

const taskList = {
  width: '100%',
  border: '1px solid red',
  overflow: 'auto',
  height: '65%'
}

const task = {
  border: '1px solid',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  marginBottom: '10px',
  padding: '0 5px'
}

const heading = {
  height:'7%',
  width:'fit-content',
  margin:'auto'
}

const finished = {
  background: 'pink',
  width:'50%'
}

const pending = {
  background: 'blue',
  width:'50%'
}

const progressList ={
  width:'100%',
  height:'93%',
  border:'1px solid green',
  overflow:'auto'
}

export default function TeamList() {
    const location = useLocation();
    const data = location.state.members;

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    
    const handelTask =()=>{
      document.getElementById('full').classList.add('active');
      document.getElementById('setProgress').style.display = 'none';
      document.getElementById('setTask').style.display = 'flex';
    }

    const handelProgress =()=>{
      document.getElementById('full').classList.add('active');
      document.getElementById('setTask').style.display = 'none';
      document.getElementById('setProgress').style.display = 'flex';
    }

    const cross = ()=>{
      document.getElementById('full').classList.remove('active');
    }

    const handelSubmit =(event)=>{
        event.preventDefault();

        let arr = todoList;
        arr.push(todo);
        setTodoList(arr);
        setTodo('');

    }

    const handelChange = (event)=>{
        setTodo(event.target.value)
    }

    const navigate = useNavigate();
    const handleSave =(event)=>{
        event.preventDefault();

        navigate("/taskList", {state : {tasks : todoList}})

    }

  


  return (
    <>
        <div style={memberList}>
      {data.map((e)=>(
        <div style={member}>
          <div style={details}>
            <h1>Work assign for {e.nickname} ({e.role})</h1>
            <progress style={recordProgress}  value="90" max="100">0 </progress>
          </div>

          <div style={options} >
              <div style={option} id='option1' onClick={handelTask}>
                  <h5>SET TASK</h5>
              </div>
              <div style={option} id='option2'onClick={handelProgress}>
                  <h5>WORK PROGRESS</h5>
              </div>
              <div style={option} id='option3'>
                  <h5>REMOVE</h5>
              </div>
          </div>
          </div>
      ))}      
    </div>

    <div id="full">
        <div id="overlay">
          <div className='cross' onClick={cross}>X</div>
          
            <div id="setTask" style={setTask}>
              <form action="#" onSubmit={event => handelSubmit(event)}>
                <input type="text" value={todo} onChange={handelChange} placeholder='Set Task' required/>
                <button type='submit'>Set Task</button>
              </form>

              <div style={taskList}>
                 {todoList.map((e)=>(
                  <div style={task}>
                      <h5>{e}</h5>
                      <button>delete</button>
                    </div>
                 ))}
              </div>

              <button onClick={event => handleSave(event)}>Save</button>
            </div>

            <div id="setProgress">
              <div style={finished}>
                    <h5 style={heading}>Work Done !</h5>
                    <div style={progressList}>

                    </div>
              </div>

              <div style={pending}>
                    <h5 style={heading}>Work Pending !</h5>
                    <div style={progressList}>

                    </div>
              </div>

            </div>

        </div>
    </div>
    </>
  )
}
