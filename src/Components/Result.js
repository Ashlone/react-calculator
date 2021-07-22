import React from "react";

function Result(props) {
  let { result } = props;
  return (
    <div className="result">
      <p>{result}</p>
    </div>
  );
}
export default Result;
