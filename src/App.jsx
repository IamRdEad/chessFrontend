import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import { useWebSocketConnection } from './hooks/useWebSocketConnection';
import SigninPage from './components/SigninPage';

function App() {
  const { sendMessage } = useWebSocketConnection();



  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/signup',
      element: <SignupPage sendMessage={sendMessage} />
    },
    {
      path: '/signin',
      element: <SigninPage sendMessage={sendMessage} />
    },
  ]);

  return (
    <div>
      <RouterProvider 
        router={router}
      />
    </div>
  );
}

export default App;
