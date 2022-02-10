import React, { useState } from "react";
import "./styles/App.scss";
import {evaluate} from "./components/functions";
import Header from "./components/Header";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Settings from "./components/Settings";

const App = () => {
  // States
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [sidebar, setSidebar] = useState(false);

  const operators = ["+", "-", "/", "*", "^", "!", "."];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1))) ||
      ([...calc][[...calc].length-1] === "!" && value !== "!")
    ) {
      return;
    } 
    
    setCalc(calc + value);
    

    if(!operators.includes(value) || (operators.includes(value) && value === "!" )) {
      setResult(evaluate(calc + value));
    }
  };

  const deleteDigit = () => {
    if(calc === "") {
      return;
    }

    const newValue = calc.slice(0, -1);

    setCalc(newValue);
  }

  const calculateResult = () => {
    setCalc(result);
  };

  const resetCalc = () => {
    setCalc("");
    setResult("");
  };

  // Returned UI
  return (
    <div className="App">
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <Display calc={calc} result={result} />
      <Buttons updateCalc={updateCalc} calculateResult={calculateResult} deleteDigit={deleteDigit} resetCalc={resetCalc} />
      <Footer />
      <Settings sidebar={sidebar}/>
    </div>
  );
};

export default App;
