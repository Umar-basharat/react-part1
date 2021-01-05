// import logo from './logo.svg';
import { React } from "react";
import './App.css';
 import  iCode  from './icode.js';


function App(props) {
  return (
    <div className="App">
    <h1>Umar Basharat iCode {props.dishname}</h1>
    </div>
<iCode weather="pakistan is a beautiful country " />
  );
}


export default App;
