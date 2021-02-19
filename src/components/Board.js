import React from "react";
import Square from "./Square";

function Board(props) {
  function renderSquare(i) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }

  function setSquares(start) {
    let cols = [];
    for (let i = 0; i < props.cols; i++) {
      cols.push(renderSquare((start + 1) * props.cols + i));
    }
    return cols;
  }

  function renderRow(start) {
    return <div className="board-row">{setSquares(start)}</div>;
  }

  function setRows() {
    let rows = [];
    for (let i = 0; i < props.rows; i++) {
      rows.push(renderRow(i));
    }
    return rows;
  }

  return <div>{setRows()}</div>;
}

export default Board;
