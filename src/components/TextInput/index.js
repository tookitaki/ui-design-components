import React from 'react';
import style from './index.scss';
import classnames from 'classnames';

export const TextInput = props => {
  const { label, validation } = props;

  if (validation && validation.state) {
    let validationIcon = '';
    let textInputClass = null;
    let validationIconClass = null;
    let validationMessage = '';

    switch(validation.state) {
      case 'success':
        validationIcon = 'fa fa-check';
        textInputClass = style.inputSuccess;
        validationIconClass = style.validationIconSuccess;
        break;
      case 'danger':
        validationIcon = 'fa fa-exclamation';
        textInputClass = style.inputDanger;
        validationIconClass = style.validationIconDanger;
        validationMessage = validation.message ? validation.message : '';
        break;
      default:
        validationIcon = 'fa fa-check';
        textInputClass = style.inputSuccess;
        validationIconClass = style.validationIconSuccess;
        break;
    }

    return (
      <div className={style.container}>
        <label>{label || ''}</label>
        <div className="row">
          <div className="col-sm-12">
            <div className={style.validationWrapper}>
              <input className={textInputClass} {...props} type="text" />
              <div className={validationIconClass}>
                <i className={validationIcon}></i>
              </div>
            </div>
            <p className={style.validationMessage}>{ validationMessage }</p>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className={style.container}>
      <label>{label || ''}</label>
      <div className="row">
        <div className="col-sm-12">
          <div className={style.validationWrapper}>
            <input {...props} type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
