import React from 'react';
import { SemiCircularBar } from 'ui-design-components';

const SemiCircularBar_SAMPLE_THICKNESS = 10;
const SemiCircularBar_SAMPLE_COLOR = '#4CAF50';
const SemiCircularBar_SAMPLE_MIN = 0;
const SemiCircularBar_SAMPLE_MAX = 100;
const SemiCircularBar_SAMPLE_VALUE = 30;
const SemiCircularBar_SAMPLE_SHOWMIN = false;
const SemiCircularBar_SAMPLE_SHOWMAX = false;
const SemiCircularBar_SAMPLE_SHOWTEXT = false;

const SemiCircularBarSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>SemiCircularBar Component</h4>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-4 offset-sm-1">
          <SemiCircularBar
            thickness={SemiCircularBar_SAMPLE_THICKNESS}
            color={SemiCircularBar_SAMPLE_COLOR}
            min={SemiCircularBar_SAMPLE_MIN}
            max={SemiCircularBar_SAMPLE_MAX}
            value={SemiCircularBar_SAMPLE_VALUE}
            showMin={SemiCircularBar_SAMPLE_SHOWMIN}
            showMax={SemiCircularBar_SAMPLE_SHOWMAX}
            showText={SemiCircularBar_SAMPLE_SHOWTEXT}
          />
        </div>
      </div>
    </div>
  );
}

export default SemiCircularBarSandbox;