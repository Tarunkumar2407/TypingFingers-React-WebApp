import React from 'react'
import AccountCircle from './AccountCircle'
import typingfingers from '../Images/typingfingers.png';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='logo'>
          <img src={typingfingers}></img>
        </div>
        <div className='user-icon'><AccountCircle /></div>
      </div>
    </div>
  )
}

export default Header