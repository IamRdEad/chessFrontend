import { useState, useEffect } from 'react';
import Stomp from 'stompjs';

export const useWebSocketConnection = () => {
  const [stompClient, setStompClient] = useState(null);

  const connect = () => {
    const client = Stomp.client("ws://localhost:8080/ws");
    client.connect({}, (frame) => {
      console.log('Connected: ' + frame);
      setStompClient(client);
    }, (error) => {
      console.log('Connection Error', error);
    });
  };

  const sendMessage = (destination, message, callback) => {
    if (stompClient && stompClient.connected) {
      stompClient.send(destination, {}, JSON.stringify(message));

      stompClient.subscribe('/topic/Response', (response) => {
        const message = JSON.parse(response.body);

        if (callback) {
          callback(message);
        }
      });
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
