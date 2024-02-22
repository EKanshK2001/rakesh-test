import React from 'react'

const form = {
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '80%',
    margin: 'auto'
}

const subject = {
    width: '35%',
    padding: '6px 5px',
    fontSize: 'large',
    borderStyle: 'dashed'
}

const message = {
    height: '50%',
    borderRadius: '15px',
    border: '2px solid darkred',
    padding: '10px'
}

const submit = {
    width: 'fit-content',
    padding: '10px 18px',
    alignSelf: 'flex-end',
    fontSize: 'medium',
    borderRadius: '20px',
    backgroundImage: 'linear-gradient(45deg, black, green)',
    color: 'white',
    cursor: 'pointer'
}

export default function Contact() {

  const handelSubmit=(event)=>{
      event.preventDefault();
  }
  
  return (
    <div style={{height : '91vh'}}>
      <form action="#" onSubmit={handelSubmit} style={form}>

        <input type="text" placeholder='subject' style={subject}/>
        <textarea name="message" id="" cols="30" rows="10" style={message}></textarea>
        <button type="submit" style={submit}>send</button>
      </form>
    </div>
  )
}
