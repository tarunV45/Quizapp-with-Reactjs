import React from "react";

const Result = ({ score, playagain }) => {
  return (
    <div className="score-board">
      <div className="score">You scored {score} / 5 corect answers</div>
      <button className="playBtn" onClick={playagain}>
        Play Again!
      </button>
    </div>
  );
};

export default Result;
