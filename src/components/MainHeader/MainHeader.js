import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <a href="/"><h1>BCF Editor </h1></a>
      
      <Navigation  />
    </header>
  );
};

export default MainHeader;
