import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import SlideMenu from './SlideMenu';

const navBar = {
  display: "flex",
  background: "black",
  justifyContent: "space-around",
  alignItems: "center",
  boxShadow: "0px 0.5px 20px red",
  height:"9vh",
  gap: '15vw'
}

const logoBtn = {
  fontWeight: "700",
  marginRight: "70px",
  color:"yellow"
}

const menuBtnUl = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "215px",
  textDecoration: "none",
  listStyle: "none"
}
const menuBtnLi = {
  display: "inline-block"
}

const menuLink = {
  textDecoration: "none",
  color: "#9E9E9E",
  fontWeight: "600"
}

const overlay = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left:'0',
  right:'0',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
  background: 'rgba(0,0,0,0.5)',
  scale: '0'
}

const wrapper = {
  height: '55vh',
  background: 'aquamarine',
  width: '27vw',
  display: 'flex',
  justifyContent:'center',
  position: 'absolute',
  zIndex: '100',
  overflow: 'hidden'
}

const auth = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  width: '90%',
  height:'100%',
  textAlign:'center'
}

const cross = {
  position: 'absolute',
  right: '10px',
  top: '10px',
  width: '40px',
  textAlign: 'center',
  color: 'white',
  fontSize: 'xx-large',
  fontWeight: '600',
  cursor:'pointer'
}


export default function Navbar() {
  // const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  let location = useLocation();

  useEffect(()=>{
    console.log(location.pathname);
  }, [location]);
  
  let [time, setTime] = new useState('00:00:00 AM');
  
  
  setInterval(()=>{
    let d = new Date();
    setTime(d.toLocaleTimeString()); 
  }, 1000)

  let [show, setShow] = new useState(false);

  useEffect(() => {
    if (show) {
      // Do something with the toggled state
    }
  }, [show]);




  // let flag = false;
  function handleMenu(){
   setShow(!show);
  }


  const gotoPage1 = (event)=>{
    event.preventDefault();
    document.getElementById('wrapper').classList.add('next');
  }

  const gotoPage0 = (event)=>{
    event.preventDefault();
    document.getElementById('wrapper').classList.remove('next');
  }

  const open = (event)=>{
    event.preventDefault();
    document.getElementById('cover').style.scale = 1;
  }

  const close = (event)=>{
    event.preventDefault();
    document.getElementById('cover').style.scale = 0;
  }

  return (

<div className="navbar" style={navBar}>

< i class="ri-menu-add-fill" style={{display:'none', color:'white'}} onClick={handleMenu}></i>

{show && <SlideMenu/>}

  <span className='toggle'>
    <ul style={menuBtnUl}>
      <li style={menuBtnLi}><Link className={`${location.pathname === '/' ? 'goTo' : ''}`} style={menuLink} to="/">HOME</Link></li>
      <li style={menuBtnLi}><Link className={`${location.pathname === '/about' ? 'goTo' : ''}`} style={menuLink} to="/about">ABOUT</Link></li>
      <li style={menuBtnLi}><Link className={`${location.pathname === '/contact' ? 'goTo' : ''}`} style={menuLink} to="/contact">CONTACT</Link></li>
    </ul>
  </span>

  
  <h3 className='clock'>{time}</h3>

    {/* {!isAuthenticated ?    
     <button className='logBtn' onClick={() => loginWithRedirect()}>Log In</button>
      :
    <button className='logBtn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>
      Log Out
    </button>
} */}

<button onClick={event => open(event)}>Login</button>

<div style={overlay} id='cover'>
  <div style={cross} onClick={event => close(event)}>X</div>
<div style={wrapper} id='wrapper'>
  <form action="/register" method='post' className="auth register" style={auth} >
    <h4>SignIn</h4>
    <input type="text" name='username'/>
    <input type="email" name='email'/>
    <input type="password" name='password'/>
    <button type="submit">Register</button>
    <h6 onClick={event => gotoPage1(event)}>Already have an account?</h6>
  </form>
  <form action="/login" method='post' className="auth login" style={auth}>
  <h4>LogIn</h4>
    <input type="email" />
    <input type="password" />
    <button type="submit">logIn</button>
    <h6 onClick={event => gotoPage0(event)}>Don't have an account?</h6>

  </form>
</div>
</div>
</div>
  )}
