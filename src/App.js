import React, { useState } from "react";
import "./App.css";
import KeyBoard from "./Components/KeyBoard";
import Result from "./Components/Result";

function App() {
  const [result, setresult] = useState("");

  //Click button
  const onClickButton = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setresult(result + button);
    }
  }; //end of Onclick

  const calculate = () => {
    let checkResult = "";
    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else {
      checkResult = result;
    }
    try {
      setresult((eval(checkResult) || "") + "");
    } catch (e) {
      setresult("error");
    }
  }; //end of calculate

  const reset = () => {
    setresult("");
  }; //end of reset

  //backspace
  const backspace = () => {
    setresult(result.slice(0, -1));
  }; //end of backspace

  return (
    <div className="App">
      <h1>Ashlone's Simple Calculator</h1>
      <Result result={result} />
      <KeyBoard onClick={onClickButton} />
    </div>
  );
}

export default App;
