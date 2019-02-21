import React from 'react';
import style from './index.scss';
import classnames from 'classnames';

export const TextInput = props => {
  return (
    <div className={style.container}>
      <label className={style.TTTextInputLabel}>{props.label || ''}</label>
      <input {...props} className={style.TTTextInput} type="text" />
    </div>
  );
}
