import React from 'react';
import style from './index.scss';
import classnames from 'classnames';

export const TextInput = props => {
  return (
    <div className={style.container}>
      <label>{props.label || ''}</label>
      <input {...props} type="text" />
    </div>
  );
}
