import React, { useState } from 'react';

// import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import {BCFContextProvider} from './store/bcf-data';

function App() {


  return (

      <BCFContextProvider>
      <MainHeader  />
      <main>
        {/* {!isLoggedIn && <Login onLogin={loginHandler} />} */}
        <Home  />
      </main>
      </BCFContextProvider>

  );
}

export default App;
