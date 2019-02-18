import React from 'react';
import style from './index.scss';

const Button = (props) => {
  return (
    <button {...props} className={style.TTButtonPrimary}>{props.children}</button>
  );
}

export default Button;