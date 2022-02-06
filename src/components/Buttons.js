import React from "react";

const Buttons = () => {
  const createDigitButtons = (numOfButtons) => {
    const buttons = [];

    for (let i = 0; i <= numOfButtons; i++) {
      buttons.push(
        <button
          className="Buttons__button Buttons__button__digits"
          key={i} 
          data-key={i}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  const createOperatorButtons = () => {
    const operator = ["DEL", "RESET", "+", "-", "x", "÷", ".", "^", "!", "="];
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
