import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage';

const Header = (props) => {
  console.log(props.data);

  const username = props.data ? props.data.firstName : 'Admin';

  const logOutUser = () =>{
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  }
  return (
    <div className='flex justify-between items-bottom'>
      <h1 className='text-2xl font-medium '>Hello <br /> <span className="text-3xl font-semibold">{username} 👋 </span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white py-2 px-5 rounded'>Log Out</button>
    </div>
  )
}

export default Header
