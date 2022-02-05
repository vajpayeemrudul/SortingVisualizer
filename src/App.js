import React from "react";
import './App.css';
import Algobut from "./components/Algobut/Algobut";
import Nav from "./components/Nav/Nav";
import Visualizer from "./components/Visualizer/Visualizer";
import Inputs from "./components/Inputs/Input"
import Heading from "./components/Heading/Heading";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Algobut/>    
    </div>
  );
}
export default App;
