import React, { useState } from 'react';
import { useWebSocket } from '../WebSocketProvider';
import '../ChessBoard.css';

const ChessBoard = () => {
  const [firstClick, setFirstClick] = useState(null);
  const [boardState, setBoardState] = useState([
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
  ]);
  const { sendMessage } = useWebSocket();

  const handleSquareClick = (row, col) => {
    if (!firstClick) {
      setFirstClick({ row, col });
    } else {
      const secondClick = { row, col };

      sendMessage('/app/move', { from: firstClick, to: secondClick }, (response) => {
        if (response.code === 1) {
          const newBoardState = boardState.map((rowArr, rowIndex) => {
            return rowArr.map((piece, colIndex) => {
              if (rowIndex === secondClick.row && colIndex === secondClick.col) {
                return boardState[firstClick.row][firstClick.col];
              } else if (rowIndex === firstClick.row && colIndex === firstClick.col) {
                return ' ';
              } else {
                return piece;
              }
            });
          });
          setBoardState(newBoardState);
        } else if (response.code === 11) {
          console.log('Move is illegal');
        }
      });

      setFirstClick(null);
    }
  };

  return (
    <div id="chessboard-container">
      <div id="chessboard" className="chessboard">
        {boardState.map((row, rowIndex) => (
          row.map((piece, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`square ${((rowIndex + colIndex) % 2 === 0) ? 'white' : 'black'}`}
              data-row={rowIndex}
              data-col={colIndex}
              onClick={() => handleSquareClick(rowIndex, colIndex)}
            >
              {piece !== ' ' && (
                <div className={`piece ${piece}`} data-row={rowIndex} data-col={colIndex} />
              )}
            </div>
          ))
        ))}
      </div>
    </div>
  );
};
export default ChessBoard;
