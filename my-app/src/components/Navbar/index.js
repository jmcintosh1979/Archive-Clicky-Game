import React from "react";
import './style.css';

function Navbar(props) {
  return (
    <div>
      <div className="row nav navbar nav-pills text-center">
        <div className="col-sm">Clicky Game</div>
        <div className="col-sm">Click an image to being!</div>
        <div className="col-sm">Score: 12 | Top Score: 12</div>
      </div>
    </div>
  )
}

export default Navbar;