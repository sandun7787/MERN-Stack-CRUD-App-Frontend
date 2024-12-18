import React from 'react'
import './nav.css'
import{link} from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul class name="home-ui">
        <li class name="home li">
            <link to="/mainhome" className='active home-a'>
            <h1>Home</h1>
            </link>

        </li>
        <li className='home li'>
        <link to="/aboutuser" className='active home-a'>
        </link>

        <h1>Add User</h1>
        </li>
        <li className='home li'>
        <link to="/userdetails" className='active home-a'>
            <h1>user detaails</h1>
            </link>

        </li>
      </ul>
    </div>
  )
}

export default Nav
