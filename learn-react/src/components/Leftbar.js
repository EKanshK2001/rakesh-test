import React, { useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

export default function Leftbar() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  let location = useLocation();

  useEffect(()=>{
    console.log(location);
  }, [location]);


  return (
    <div className='sideBar'>

      <div>
        {isAuthenticated ? <h3>{user.name}</h3> : <h3>Dummy User</h3>}
      </div>

        <ul>
            <li className = {`${location.pathname === '/toDoList' ? 'active' : ''}`}><Link to={'/toDoList'}>Set Your Goals</Link></li>
            <li className = {`${location.pathname === '/personalRoutine' ? 'active' : ''}`}><Link to={'/personalRoutine'}>Create a Routine</Link></li>
            <li className = {`${location.pathname === '/specialEvents' ? 'active' : ''}`}><Link to={'/specialEvents'}>Add Important Events</Link></li>
        </ul>

        {/* can add more custom functionality */}
    </div>
  )
}
