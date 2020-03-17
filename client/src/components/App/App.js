import React from "react";
import "./App.css";
import Form from "../Form/Form";
import View from "../View/View";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Input Data</h1>
      </header>
      <Form />
      <View />
    </div>
  );
};

export default App;
