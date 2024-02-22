import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const side = {
  right: "0px"
}

export default function Rightbar() {
  let location = useLocation();

  useEffect(()=>{
    console.log(location.pathname);
  }, [location]);
  return (
    <div style={side} className='sideBar'>
        <ul>
            <li className = {`${location.pathname === '/calculator' ? 'active' : ''}`}><Link to="/calculator" >Free Time Calculator</Link></li>
            <li className = {`${location.pathname === '/team' ? 'active' : ''}`}><Link to="/createTeam" >Teams</Link></li>
        </ul>
    </div>
  )
}
