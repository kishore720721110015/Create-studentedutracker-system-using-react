import React from 'react';
import ReactDOM from 'react-dom';
import HeaderMenu from './header.js';
import Board from './chess.js';
import './index.css';
// import Content from './body.js';
import Hello from './todolist.js';
import Dashboard from './student';


function Retun(){
  return(
    <div>
      {/* <HeaderMenu/>
      <Content/> */}
      {/* <Hello/> */}
      {/* <Board/> */}
      <Dashboard/>
    </div>
    )
}
ReactDOM.render(<Retun/>,document.getElementById("root"));