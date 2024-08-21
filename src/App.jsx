import { useState } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './components/HomePage';

const rounter = createBrowserRouter([{
  path: '/',
  element: <HomePage />
}]);

function App() {

  return (
    <div>
      <RouterProvider router={rounter} />
    </div>
  );
}

export default App
