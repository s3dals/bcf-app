import React from 'react';

import classes from './Input.module.css';

const Button = (props) => {
  return (
    <input
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      onChange={props.onChange}
      disabled={props.disabled}
    />

  );
};

export default Button;
