import React, { useState } from "react";
import "./styles/App.scss";
import {evaluate, operators, digits} from "./components/functions";
import {Howl} from "howler";
import keySound from "./assets/key-sound.mp3";
import Header from "./components/Header";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Settings from "./components/Settings";

const App = () => {
  // States
  const [calc, setCalc] = useState(() => "");
  const [result, setResult] = useState(() => "");
  const [sidebar, setSidebar] = useState(false);
  const [sound, setSound] = useState(true);

  const playSound = (src) => {
    const sound = new Howl ({
      src,
      html5: true,
    })

    sound.play()
  }

  const updateCalc = (value) => {
    if (
      (operators.includes(value) &&  calc === "") ||
      (value === "!" &&  calc.length > 2) ||
      (operators.includes(value) && operators.includes([...calc][[...calc].length-1]) && [...calc][[...calc].length-1] !== "-") ||
      ([...calc][[...calc].length-1] === "!" && value !== "!")
    ) {
      return;
    }

    if((value !== "-" && !digits.includes(value)) && [...calc][[...calc].length-1] === "-") {
      return;
    }

    if(value === "-" && [...calc][[...calc].length-2] === "-") {
      return;
    }
    
    setCalc(() => calc + value);
    

    if(!operators.includes(value) || (operators.includes(value) && value === "!" )) {
      setResult(() => evaluate(calc + value))
    }
  };

  const deleteDigit = () => {
    if(calc === "") {
      return;
    }

    const newValue = calc.slice(0, -1);

    setCalc(() => newValue);

    if(sound) {
      playSound(keySound);
    }
  }

  const calculateResult = () => {
    setCalc(() => result);
    if(sound) {
      playSound(keySound);
    }
  };

  const resetCalc = () => {
    setCalc(() => "");
    setResult(() => "");
    if(sound) {
      playSound(keySound);
    }
  };

  // Returned UI
  return (
    <div className="App">
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <Display calc={calc} result={result} />
      <Buttons updateCalc={updateCalc} calculateResult={calculateResult} deleteDigit={deleteDigit} resetCalc={resetCalc} sound={sound} playSound={playSound} />
      <Footer />
      <Settings sidebar={sidebar} sound={sound} setSound={setSound}/>
    </div>
  );
};

export default App;
