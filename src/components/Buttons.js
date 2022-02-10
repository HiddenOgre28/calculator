import React from "react";
import {operators, digits} from "./functions";
import {Howl} from "howler";
import keySound from "../assets/key-sound.mp3";

const Buttons = ({updateCalc, calculateResult, deleteDigit, resetCalc, sound, setSound}) => {
  const playSound = (src) => {
    const sound = new Howl ({
      src,
      html5: true,
    })

    sound.play()
  }
  
  const handleClick = (e) => {
    updateCalc(`${e}`);
    if(sound) {
      playSound(keySound);
    }
  };

  const handleKeyPress = (e) => {
    if(operators.includes(e.key) || digits.includes(e.key)) {
      updateCalc(`${e.key}`)
      if(sound) {
        playSound(keySound);
      }
    }

    if(e.key === "Enter") {
      e.preventDefault();
      calculateResult();
      if(sound) {
        playSound(keySound);
      }
    }

    if(e.key === "Escape" || e.key === "Delete") {
      resetCalc();
      if(sound) {
        playSound(keySound);
      }
    }

    if(e.key === "Backspace") {
      deleteDigit();
      if(sound) {
        playSound(keySound);
      }
    }
  };

  const createDigitButtons = (numOfButtons) => {
    const buttons = [];

    for (let i = 0; i <= numOfButtons; i++) {
      buttons.push(
        <button
          className="Buttons__button Buttons__button__digits"
          key={i} 
          data-key={i}
          onKeyDown={handleKeyPress}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  const createOperatorButtons = () => {
    const operator = ["DEL", "RESET", "+", "-", "*", "/", ".", "^", "!", "="];
    const buttons = [];

    operator.forEach((operator, index) =>
      buttons.push(
        <button
          className={
            operator === "DEL" || operator === "RESET" || operator === "="
              ? "Buttons__button__rect Buttons__button"
              : "Buttons__button Buttons__button__opt"
          }
          key={index}
          data-key={operator}
          onKeyDown={operator === "=" ? calculateResult : () => handleKeyPress()}
          onClick={operator === "=" ? calculateResult : 
            operator === "DEL" ? deleteDigit : 
            operator === "RESET" ? resetCalc : () => handleClick(operator)}
        >
          {operator}
        </button>
      )
    );

    return buttons;
  };

  return (
    <div className="Buttons">
      <div className="Buttons__container">
        {createDigitButtons(9)}
        {createOperatorButtons()}
      </div>
    </div>
  );
};

export default Buttons;
