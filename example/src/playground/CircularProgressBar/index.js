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
            strokeFill={CircularProgressBar_SAMPLESTROKEFILL} />
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { CircularProgressBar } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`const CircularProgressBar_SAMPLEPERCENTAGE = 30;`}</p>
          <p>{`const CircularProgressBar_SAMPLESQSIZE = 50;`}</p>
          <p>{`const CircularProgressBar_SAMPLESTROKEFILL = '#E85252';`}</p>
          <p>{`const CircularProgressBar_SAMPLESTROKEWIDTH = 5;`}</p>

          <br />
          <br />
          <br />

          <p>{`<CircularProgressBar`}</p>
          <p>&emsp;&emsp;{`sqSize={CircularProgressBar_SAMPLESQSIZE}`}</p>
          <p>&emsp;&emsp;{`percentage={CircularProgressBar_SAMPLEPERCENTAGE}`}</p>
          <p>&emsp;&emsp;{`strokeWidth={CircularProgressBar_SAMPLESTROKEWIDTH}`}</p>
          <p>&emsp;&emsp;{`strokeFill={CircularProgressBar_SAMPLESTROKEFILL} />`}</p>
        </code>
      </div>
    </div>
  );
}

export default CircularProgressBarSandbox;