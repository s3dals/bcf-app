import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <input
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    />

  );
};

export default Button;
