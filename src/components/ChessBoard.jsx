import React, { useState } from 'react';
import { useWebSocket } from '../WebSocketProvider';
import '../ChessBoard.css';


const ChessBoard = () => {
  const [firstClick, setFirstClick] = useState(null);
  const { sendMessage } = useWebSocket();

  const boardState = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
  ];

  const handleSquareClick = (row, col) => {
    if (!firstClick) {
      setFirstClick({ row, col });
      console.log(`First click: (${row}, ${col})`);
    } else {
      const secondClick = { row, col };
      console.log(`Second click: (${row}, ${col})`);

      sendMessage('/app/move', { from: firstClick, to: secondClick }, (response) => {
        console.log('Move response:', response);
        // Handle Response
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
