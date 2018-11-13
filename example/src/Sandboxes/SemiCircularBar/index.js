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
            showText={SemiCircularBar_SAMPLE_SHOWTEXT} />
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { SemiCircularBar } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />


          <p>{`const SemiCircularBar_SAMPLE_THICKNESS = 10;`}</p>
          <p>{`const SemiCircularBar_SAMPLE_COLOR = '#4CAF50';`}</p>
          <p>{`const SemiCircularBar_SAMPLE_MIN = 0;`}</p>
          <p>{`const SemiCircularBar_SAMPLE_MAX = 100;`}</p>
          <p>{`const SemiCircularBar_SAMPLE_VALUE = 30;`}</p>
          <p>{`const SemiCircularBar_SAMPLE_SHOWMIN = false;`}</p>
          <p>{`const SemiCircularBar_SAMPLE_SHOWMAX = false;`}</p>
          <p>{`const SemiCircularBar_SAMPLE_SHOWTEXT = false;`}</p>

          <br />
          <br />
          <br />

          <p>{`<SemiCircularBar`}</p>
          <p>&emsp;&emsp;{`thickness={SemiCircularBar_SAMPLE_THICKNESS}`}</p>
          <p>&emsp;&emsp;{`color={SemiCircularBar_SAMPLE_COLOR}`}</p>
          <p>&emsp;&emsp;{`min={SemiCircularBar_SAMPLE_MIN}`}</p>
          <p>&emsp;&emsp;{`max={SemiCircularBar_SAMPLE_MAX}`}</p>
          <p>&emsp;&emsp;{`value={SemiCircularBar_SAMPLE_VALUE}`}</p>
          <p>&emsp;&emsp;{`showMin={SemiCircularBar_SAMPLE_SHOWMIN}`}</p>
          <p>&emsp;&emsp;{`showMax={SemiCircularBar_SAMPLE_SHOWMAX}`}</p>
          <p>&emsp;&emsp;{`showText={SemiCircularBar_SAMPLE_SHOWTEXT} />`}</p>
        </code>
      </div>
    </div>
  );
}

export default SemiCircularBarSandbox;