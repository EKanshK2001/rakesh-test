import React, { useState } from 'react'

const formSection = {
  display: "flex",
  // justifyContent: "space-around",
  margin:'auto',
  alignItems : "center",
  width: "50%",
  height: "25%"
}

const inputs = {
    height: 'fit-content',
    width: '65%',
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',
    flexWrap: 'wrap'
    /* background-image: linear-gradient(0deg, white, transparent); */
}

const nameSection = {
  fontSize: "medium",
  padding: "5px 7px",
  width: "100%",
  outline: "none",
  borderStyle: 'groove',
  borderColor: '#8fc1d9',
  borderWidth: 'thick'
}
const dateSection = {
  padding: "0px 5px",
  background: '#rgb(194 192 192)'
}
const addSection = {
  width: "20%",
  padding: "5px 7px",
  fontSize: "medium",
  background: '#607D8B',
  color: 'white',
  cursor: 'pointer'
}
const submitSection = {
  width: '15%',
  padding: '7px 0px',
  fontSize: 'large',
  margin: 'auto',
  cursor: 'pointer',
  background: 'green',
  borderRadius: '10px',
  color: 'white'
}


export default function SpecialEvents() {

  let [name, setName] = new useState('');
  let [date, setDate] = new useState('');
  let [list, setList] = new useState([]);

  const changeName = (event)=>{
        setName(event.target.value);    
  }

  const changeDate = (event)=>{
        setDate(event.target.value);    
  }

  const handelSubmit = (event) =>{
    if(name.length <= 2 || date === ''){
      alert("fuck off");
    }
    else{
      let temp = list;
      temp.push({eName: name, eDate: date});
      setList(temp);
      setName('');
      setDate('');
    }
    event.preventDefault();
  }

  const deleteFunc = (event, key)=>{
    setList(list.filter((e) => key !== list.indexOf(e)))
    event.preventDefault();
  }

  return (
    // <div className='container'>
      <div className="box">

        <form style={formSection} onSubmit={handelSubmit}>
          <div style={inputs}>
            <input style={nameSection} type="text"  value={name} onChange={changeName} placeholder="Put the event here"/>
            <input style={dateSection} type="date" value={date} onChange={changeDate}/>
            <button style={addSection} type='submit'>ADD</button>
          </div>

          <button style={submitSection}>submit</button>
        </form>
     

      <div className="wrapper">

      {list.map((e,index)=>(
    <div className='list'> 
    <div className='task'> <span key={index}>{e.eName + " is on " + e.eDate}</span> </div>
    <div><button className='deleteBtn' onClick={event => deleteFunc(event, index)}>delete</button></div>
  </div>
  ))}

      </div>

</div>

    // </div>
  )
}
