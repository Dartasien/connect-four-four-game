import React from "react";
import Square from "./Square";

function Board(props) {
  function renderSquare(i) {
    return (
      <Square
        key={i}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }

  function setSquares(row) {
    let cols = [];
    let count = row * props.cols;
    for (let col = 0; col < props.cols; col++) {
      cols.push(renderSquare(count));
      count++;
    }
    return cols;
  }

  function renderRow(row) {
    return (
      <div key={row} className="board-row">
        {setSquares(row)}
      </div>
    );
  }

  function setRows() {
    let rows = [];
    for (let row = 0; row < props.rows; row++) {
      rows.push(renderRow(row));
    }
    return rows;
  }

  return <div>{setRows()}</div>;
}

export default Board;
