import React from 'react';
import style from './index.scss';
import classnames from 'classnames';

import { Button as AntDButton } from 'antd';

const ButtonGroup = AntDButton.Group;

export const Button = props => {
  switch(props.size) {
    case 'lg':
      return <button {...props} className={style.TTButtonPrimary}>{props.children}</button>;
    case 'md':
      return <button {...props} className={classnames(style.TTButtonPrimary, style.buttonMedium)}>
      {props.children}
      </button>;
    case 'sm':
      return <button {...props} className={classnames(style.TTButtonPrimary, style.buttonSmall)}>
      {props.children}
      </button>;
    default:
      return <button {...props} className={style.TTButtonPrimary}>{props.children}</button>;
  }
}

export const ButtonSecondary = props => {
  switch(props.size) {
    case 'lg':
      return <button {...props} className={style.TTButtonSecondary}>{props.children}</button>;
    case 'md':
      return <button {...props} className={classnames(style.TTButtonSecondary, style.buttonMedium)}>
      {props.children}
      </button>;
    case 'sm':
      return <button {...props} className={classnames(style.TTButtonSecondary, style.buttonSmall)}>
      {props.children}
      </button>;
    default:
      return <button {...props} className={style.TTButtonSecondary}>{props.children}</button>;
  }
}

export const ButtonTertiary = props => {
  switch(props.size) {
    case 'lg':
      return <button {...props} className={style.TTButtonTertiary}>{props.children}</button>;
    case 'md':
      return <button {...props} className={classnames(style.TTButtonTertiary, style.buttonMedium)}>
      {props.children}
      </button>;
    case 'sm':
      return <button {...props} className={classnames(style.TTButtonTertiary, style.buttonSmall)}>
      {props.children}
      </button>;
    default:
      return <button {...props} className={style.TTButtonTertiary}>{props.children}</button>;
  }
}

export const GroupedButton = props => {
  return <ButtonGroup>{props.children}</ButtonGroup>;
}