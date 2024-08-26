import React, { createContext, useContext, useState, useEffect } from 'react';
import Stomp from 'stompjs';

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const connect = () => {
      const client = Stomp.client("ws://localhost:8080/ws");
      client.connect({}, (frame) => {
        console.log('Connected: ' + frame);
        setStompClient(client);
      }, (error) => {
        console.log('Connection Error', error);
      });
    };

    connect();

    return () => {
      if (stompClient) {
        stompClient.disconnect(() => {
          console.log('Disconnected');
        });
      }
    };
  }, []);

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

  return (
    <WebSocketContext.Provider value={{ stompClient, sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  return useContext(WebSocketContext);
};
