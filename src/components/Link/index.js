import React from 'react';
import style from './index.scss';

const Link = props => {
  if (props) {
    return (
      <a {...props} className={style.TTLink}>{props.children}</a>
    );
  }

  return null;
}

export default Link;