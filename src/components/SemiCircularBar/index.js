import React from 'react';

import style from './index.scss'

class SemiCircularBar extends React.Component { // eslint-disable-line react/prefer-stateless-function  
  render() {
    const {thickness, color, min, value, max, showMin, showMax, showText, text, secondText} = this.props;
    if (!thickness || !color || min === undefined || max === undefined
      || value === undefined) {
        return null;
    }
    const length = Math.PI * 45;
    const offset = (max-value)/100*length;
    return (
      <div className={style.wrapper}>
        <svg viewBox="0 0 100 50">
          <path d="M 50,50 m -45,0 a 45,45 0 1 1 90,0" stroke="#dfe6ee" strokeWidth={thickness} fillOpacity="0"></path>
          <path d="M 50,50 m -45,0 a 45,45 0 1 1 90,0" stroke={color} strokeWidth={thickness} fillOpacity="0" 
            style={{strokeDasharray: `${length} ${length}`, strokeDashoffset: `${offset}`}}
            >
            </path>
        </svg>
        <div className={style.progressbarText}>{value}</div>
        { secondText && <div className={style.secondProgressbarText}>{secondText}</div> }
        {showMin && <span className={style.min}>{min}</span>}
        {showText && <span className={style.mediumText}>{text}</span>}
        {showMax && <span className={style.max}>{max}</span>}
      </div>
    );
  }
}

SemiCircularBar.propTypes = {

};

export default SemiCircularBar;
