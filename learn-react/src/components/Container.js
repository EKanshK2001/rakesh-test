import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react';
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';

const recordList = {
    position : 'relative',
    textAlign: "start",
    fontSize: "x-large",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    background: "rgb(115, 108, 108, 0.5)",
    borderRadius: "20px",
    height: "20vh", 
    width:"100%",
    color : 'white'
}

const recordLink = {
  width : '90%',
  textDecoration: "none",
  color: "yellow",
  fontWeight: "900",
  fontFamily: "auto",
  margin:'auto'
}

const process = {
  position : 'absolute',
  right : '10px',
  top : '10px',
}

const recordProgress = {
  display:"block",
  width: "100%",
  height: "22px",
  accentColor: "white"
}

export default function Container() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Typing logic goes here  
    
    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);
        
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;

};

  return (
    
    <div className='container'>

       <Leftbar/>

      <div style={{width:'fit-content', margin:'0 auto'}}>

      {isAuthenticated ?
      <div className='main'>
      <h1 style={{color:"white", fontFamily:"cursive", fontSize:'2.5vw'}}>TRACK YOURSELF NOW !</h1>

      <div style={recordList}>
        <span style={process}>0%</span>
        <Link style={recordLink} to={'./goalList'}><h3>Daily Goals</h3> <progress style={recordProgress}  value="92" max="100"> 92% </progress></Link>
      </div>
      <div style={recordList}>
      <span style={process}>0%</span>
        <Link style={recordLink} to={'./routineList'}><h3>My Routines</h3> <progress style={recordProgress}  value="32" max="100"> 32% </progress></Link>
      </div>
      <div style={recordList}>
      <span style={process}>0%</span>
        <Link style={recordLink} to={'./eventList'}><h3>Sepcial Events</h3><progress style={recordProgress}  value="52" max="100"> 52% </progress></Link>
      </div>
      </div>

      :
      
      <div className='intro'>
      <h1 style={{height:'inherit'}}>
        Welcome, <Typewriter text="To Our React App : This Web App Can Help You To Lead your life One Step Toward Success. You Can Track Your Day-To-Day Life Goals To Finish All Your Task on Time. You Can Also Store Your Personal / Accadamic Routines To Manage Your Work Life. Last But Not The Least, This App Is Also Capable of Remembering DATES of Your Important Events That You Could Not Afford Missing. MANY MORE FEATURES YET TO COME !!!" delay={100} />
      </h1>
      </div>
      }
      </div>

      <Rightbar/>
     </div> 
  )
}
