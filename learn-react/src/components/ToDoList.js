import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import axios from 'axios';

const formAddition = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "50%",
  height: "20%"
}

const formSection = {
    display: "flex",
    justifyContent: "space-between",
    width: "75%",
    padding: "8px",
    background: "blueviolet",
    border: "3px inset #ffffff",
    borderRadius: "45px",
}

const formInput = {
  width: "75%",
  padding: "0px 16px",
  fontSize: "1.1rem",
  outline: "none",
  borderRadius: "22px",
  borderWidth: "0px"
}

const formButton = {
  padding: "8px 1px",
  fontWeight: "600",
  background: "aqua",
  fontSize: "medium",
  cursor: "pointer",
  borderRadius: "20px",
  borderColor: "white",
  boxShadow: "1px 1px 27px skyblue"
}

const formSubmission = {
  padding: "8px 12px",
  fontSize: "medium",
  borderWidth: "thick",
  borderColor: "darkgray",
  borderRadius: "15px",
  background: "aqua",
  fontWeight: "600",
  cursor: "pointer"
}

export default function ToDoList() {

  let [todo, setTodo] = new useState('');
  let [todoList, setTodoList] = new useState([]);

  const handelChange = (event)=>{
      setTodo(event.target.value);
  }

  const handelSubmit = (event)=>{
    if(todo.length <= 2){
      alert("fuck off");
    }
    else{
      let arr = todoList;
      arr.push(todo);
      setTodoList(arr);
      setTodo('');
    }
    event.preventDefault();
    // console.log(todoList);
  }

  const editFunc = (event, key)=>{
    event.preventDefault();

    if(event.target.innerHTML === 'edit'){
      event.target.parentElement.previousSibling.firstChild.remove();
      var root = ReactDOM.createRoot(event.target.parentElement.previousSibling);    
      root.render(<input className='inputTask' type='text'/>);    
      event.target.innerHTML = 'done';
    }
    else{
      todoList[key] = event.target.parentElement.previousSibling.firstChild.value;
      setTodoList(todoList);
      event.target.parentElement.previousSibling.firstChild.remove();
      root = ReactDOM.createRoot(event.target.parentElement.previousSibling);    
      root.render(<span>{todoList[key]}</span>);      
      event.target.innerHTML = 'edit';
      // console.log(todoList);
    }

  }
  
  const deleteFunc = (event, key)=>{
    setTodoList(todoList.filter((e) => key !== todoList.indexOf(e)))
    event.preventDefault();
  }



  const submitFunc = (event) =>{
    event.preventDefault();
   
    axios.post('http://localhost:3001/add', {todoList: todoList})
    .then(result => console.log(result))
    .catch(err => console.log(err));
  }


  return (
    // <div className='container'>
      <div className='box'>

        <div style={formAddition}>
          <form style={formSection} onSubmit={handelSubmit}>
            <input style={formInput} type="text" value={todo} onChange={handelChange} placeholder='Enter your goals'/>
            <button style={formButton} type='submit'>ADD</button>
          </form>

          <button style={formSubmission} onClick={event => submitFunc(event)}>Save</button>
        </div>


  <div className='wrapper'>

{todoList.map((e, index)=>(
    <div className='list' > 
    <div className='task'> <span>{e}</span> </div>
    <div className='buttons'>
    <button className='editBtn' key={index} onClick={event => editFunc(event, index)}>edit</button>
    <button className='deleteBtn' key={index} onClick={event => deleteFunc(event, index)}>delete</button>
    </div>
    </div>
  ))}
  
  </div>

    </div>
    // </div>
  )

}

