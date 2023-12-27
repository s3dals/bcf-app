import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import Read from './pages/Read';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Check from './pages/Check';

import ErrorPage from './pages/Error'

// import { BCFContextProvider } from './store/bcf-data';

const router = createBrowserRouter([
  {
    path: '', element: <RootLayout />, errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home /> },
      { path: 'read', element: <Read /> },
      { path: 'check', element: <Check /> },
      { path: 'edit', element: <Edit /> },
    ]
  },

]);

function App() {
  // return <RouterProvider router={router} />;

  return (

    <>
      <RouterProvider router={router} />
      {/* <MainHeader /> */}
      {/* <main> */}
      {/* {!isLoggedIn && <Login onLogin={loginHandler} />} */}
      {/* <Home /> */}
      {/* </main> */}
     </>

  );
}

export default App;
