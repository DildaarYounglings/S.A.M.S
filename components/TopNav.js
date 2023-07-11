import React, { useEffect, useRef, useState } from 'react';
import { NavLink,} from 'react-router-dom';
import './TopNav.css';
//import profilepic from './images/profilepic.png';
import { UserProfile } from './UserProfile';


export const TopNav = () => {
  const navigation = [
    { name: 'Home', href: '/Home' },
    { name: 'Lessons', href: '/lessons' },
    { name: 'Recipes', href: '/Recipes' },
    { name: 'Categories', href: '/' },
  ]

  return (

    <nav className="TopNav">
      <img className="TopNav_logo" src={"images/shesha_logo.png"} alt="" style={{ height: "70px", top: "20px", }} />
      {navigation.map((item) => (
        <NavLink key={item.name} to={item.href} className={({ isActive }) => { return `TopNav_a ${isActive ? 'TopNav_a active' : ''}` }}>{item.name}</NavLink>
      ))}
      
       
      
      {/*<img src={profilepic} alt="profilepic.png" style={{ position: "relative", left: "27%", top: "20px", borderRadius: "50%", }}></img>*/}
      <UserProfile/>
    </nav>
  )
}
