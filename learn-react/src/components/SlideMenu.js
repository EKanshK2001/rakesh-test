import React from 'react'
import { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom'

const menuList = {
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  justifyContent: 'space-evenly',
  padding: '12px 0',
  gap: '4vw',
  alignItems: 'center',
  fontWeight: '700',
  width: '90%'
}

export default function SlideMenu() {

  let location = useLocation();

  useEffect(()=>{
    console.log(location.pathname);
  }, [location]);


  return (
    <div className='slideMenu'>
    <div style={menuList}>
          <li><Link className={`${location.pathname === '/' ? 'goTo' : ''}`} to="/">HOME</Link></li>
          <li><Link className={`${location.pathname === '/about' ? 'goTo' : ''}`} to="/about">ABOUT</Link></li>
          <li><Link className={`${location.pathname === '/contact' ? 'goTo' : ''}`} to="/contact">CONTACT</Link></li>
    </div>

    <hr />

    <div style={menuList}>
          <li><Link className={`${location.pathname === '/toDoList' ? 'goTo' : ''}`} to="/toDoList">Set Goals</Link></li>
          <li><Link className={`${location.pathname === '/personalRoutine' ? 'goTo' : ''}`} to="/personalRoutine">Set Routine</Link></li>
          <li><Link className={`${location.pathname === '/specialEvents' ? 'goTo' : ''}`} to="/specialEvents">Add Events</Link></li>
          <li><Link className={`${location.pathname === '/' ? 'goTo' : ''}`} to="/">Free Time Calculator</Link></li>
   
    </div>
  </div>
  )
}
