import { useState, useEffect } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

export const useWebSocketConnection = () => {
  const [stompClient, setStompClient] = useState(null);

  const connect = () => {
    const socket = new SockJS("http://localhost:8080/ws");
    const client = over(socket);
    client.connect({}, (frame) => {
      console.log('Connected: ' + frame);
      setStompClient(client);

      client.subscribe('/topic/Response', (response) => {
        const message = JSON.parse(response.body);
        console.log('Message content:', message.content + "\nMessage code: " + message.code);

        if (message.code === 200) {
          window.location.href = '/chessboard'; 
        } else {
          alert(message.content);
        }
      });
    }, (error) => {
      console.log('Connection Error', error);
    });
  };

  const sendMessage = (destination, message) => {
    if (stompClient && stompClient.connected) {
      stompClient.send(destination, {}, JSON.stringify(message));
    } else {
      console.error('WebSocket client is not connected.');
    }
  };

  useEffect(() => {
    connect(); 
  }, []);

  return {
    sendMessage,
  };
};
