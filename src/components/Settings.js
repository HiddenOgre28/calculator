import React, { useState } from 'react';
import soundOn from "../assets/sound-on.svg";
import soundOff from "../assets/sound-off.svg";

const Settings = ({sidebar, sound, setSound}) => {

  const component = document.getElementsByClassName("Settings");

  const toggleSound = () => {
    setSound(!sound);
  };

  return (
    <div className={component.className === "Settings" && sidebar === false ? "Settings--visible" : "Settings--hidden"}>
        <section className='Settings__theme'>
            <h2 className='Settings__theme__title'>Theme</h2>
            <input type="range" min="1" max="3" step="1" className='Settings__theme__slider'></input>
            <div className='Settings__theme__picks'>
              <span>1</span><span>2</span><span>3</span>
            </div>
        </section>
        <section className='Settings__sound'>
            <button className='Settings__sound__btn' onClick={toggleSound}><img src={sound ? soundOn : soundOff} alt="" className='Settings__sound__img'></img>Sound: {sound ? "On" : "Off"}</button>
        </section>
    </div>
  );
};

export default Settings;
