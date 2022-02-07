import React from 'react';
import cog from "../assets/cog.svg";

const Header = () => {
  return (
    <div className='Header'>
      <h1 className ='Header__title'>calc</h1>
      <img src={cog} alt="" className ='Header__settings' tabIndex="0" aria-label="settings"></img>
    </div>
  );
}

export default Header;