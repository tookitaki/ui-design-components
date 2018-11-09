import React from 'react';
import { CircularProgressBar } from 'ui-design-components';

const CircularProgressBar_SAMPLEPERCENTAGE = 30;
const CircularProgressBar_SAMPLESQSIZE = 50;
const CircularProgressBar_SAMPLESTROKEFILL = '#E85252';
const CircularProgressBar_SAMPLESTROKEWIDTH = 5;

const CircularProgressBarSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>CircularProgressBar Component</h4>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-4 offset-sm-1">
          <CircularProgressBar
            sqSize={CircularProgressBar_SAMPLESQSIZE}
            percentage={CircularProgressBar_SAMPLEPERCENTAGE}
            strokeWidth={CircularProgressBar_SAMPLESTROKEWIDTH}
            strokeFill={CircularProgressBar_SAMPLESTROKEFILL}
          />
        </div>
      </div>
    </div>
  );
}

export default CircularProgressBarSandbox;