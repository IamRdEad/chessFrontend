import React, { useEffect } from 'react';

function WebSocketTest() {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/ws');

    socket.onopen = () => {
      console.log('WebSocket is connected');
    };

    socket.onerror = (error) => {
      console.error('WebSocket connection error:', error);
    };

    socket.onclose = (event) => {
      console.log('WebSocket closed:', event);
    };

    return () => {
      if (socket) socket.close();
    };
  }, []);

  return <div>WebSocket Test</div>;
}

export default WebSocketTest;
