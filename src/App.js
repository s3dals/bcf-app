import React, { useState } from 'react';

// import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {


  return (
    <React.Fragment>
      <MainHeader  />
      <main>
        {/* {!isLoggedIn && <Login onLogin={loginHandler} />} */}
        <Home  />
      </main>
    </React.Fragment>
  );
}

export default App;
