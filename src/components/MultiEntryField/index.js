import React from 'react';
import style from './index.scss';
import classnames from 'classnames';
import { Select } from 'antd';

const MultiEntryField = props => {
  const { label, validation } = props;

  if (validation && validation.state && validation.state === 'danger') {
    return (
      <div style={{ width: '100%' }} className={style.TTMultiEntryFieldFail}>
        <label>{label || ''}</label>
        <Select mode="tags" style={{ width: '100%' }} {...props}>
          { props.children }
        </Select>
        <p className={style.validationMessage}>
          <span className={classnames(style.validationIconDanger, 'fa fa-exclamation')}></span>
          { validation.message || '' }
        </p>
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      <label>{label || ''}</label>
      <Select mode="tags" style={{ width: '100%' }} {...props}>
        { props.children }
      </Select>
    </div>
  );
}

export default MultiEntryField;