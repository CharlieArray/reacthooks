import React from "react";
import "./App.css";
import ButtonClick from './ButtonClick'
import BasicEffect from './BasicEffect'

//button with caption that has default state of "unclicked", and then "clicked"

function App() {

  return (
    <>
      <h1>React Hooks Sandbox Environment</h1>
      <ButtonClick/>
      <BasicEffect/>
    </>
  );
}

export default App;
