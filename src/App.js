import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Settings from "./components/Settings"

const App = () => {
  // Returned UI
  return (
    <div className="App">
      <Header />
      <Display />
      <Buttons />
      <Footer />
    </div>
  );
};

export default App;
