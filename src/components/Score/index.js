import React from "react";
import "./style.css";

function Score(props) {
  return (
    <header className="scoreB">
      <div className="row">
        <div className="col-md-6 col-left"><h5>{props.title}</h5></div>
        <div className="col-md-3 col-right"><h6>High Score {props.score}</h6></div>
        <div className="col-md-3 col-right"><h6>Current Score: {props.highScore}</h6></div>
      </div>
      <div className="row">
      <div className="col-md-12 col-right">
      <h6>Click a friend, but only once! Try to hit as many new friends to get a new high score!</h6></div>
      </div>
    </header>
  );
}

export default Score;