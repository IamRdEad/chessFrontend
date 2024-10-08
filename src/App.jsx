window.alert = function() {};
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import SigninPage from './components/SigninPage';
import ChessBoardWebPage from './components/ChessBoardWebPage';
import { WebSocketProvider } from './WebSocketProvider';
import MainMenu from './components/MainMenu';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/signup',
      element: <SignupPage />
    },
    {
      path: '/signin',
      element: <SigninPage />
    },
    {
      path: '/ChessBoard',
      element: <ChessBoardWebPage />
    },
    {
      path: '/Main',
      element: <MainMenu />
    },
  ]);

  return (
    <WebSocketProvider>
      <RouterProvider router={router} />
    </WebSocketProvider>
  );
}

export default App;
