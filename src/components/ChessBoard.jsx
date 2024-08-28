import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useWebSocket } from '../WebSocketProvider';
import '../ChessBoard.css';

const ChessBoard = () => {
  const location = useLocation();
  const [boardState, setBoardState] = useState(location.state.board || []);
  const [firstClick, setFirstClick] = useState(null);
  const { sendMessage } = useWebSocket();

  const handleSquareClick = (row, col) => {
    if (!firstClick) {
      setFirstClick({ row, col });
    } else {
      const move = { from: firstClick, to: { row, col } };

      sendMessage('/app/move', move, (response) => {
        if (response.code === 301) {
          setBoardState(response.board);
        } else {
          alert(response.message);
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
