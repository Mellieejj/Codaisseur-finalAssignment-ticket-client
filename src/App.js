import React from "react";
import LoginFormContainer from "./components/LoginFormContainer";
import "./App.css";
import SignUpContainer from "./components/SignUpContainer";

function App() {
  return (
    <div className="App">
      <LoginFormContainer />
      <SignUpContainer />
    </div>
  );
}

export default App;
