import React from 'react';
import style from './index.scss';

export const Button = props => {
  return (
    <button {...props} className={style.TTButtonPrimary}>{props.children}</button>
  );
}

export const ButtonSecondary = props => {
  return (
    <button {...props} className={style.TTButtonSecondary}>{props.children}</button>
  );
}

export const ButtonTertiary = props => {
  return (
    <button {...props} className={style.TTButtonTertiary}>{props.children}</button>
  );
}