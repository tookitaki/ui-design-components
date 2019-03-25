import React from 'react';
import { Stepping, Step } from 'ui-design-components';

const SteppingSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>Stepping Component</h4>
      </div>

      <div className="row col-sm-12">
        <p><small>Please refer to Ant Design's documentation for props info</small></p>
      </div>

      <div className="row col-sm-12">
        <Stepping current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Stepping>
      </div>

      <div className="row col-sm-12" style={{ marginTop: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { Stepping, Step } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`<Stepping current={1}>`}</p>
          <p>{`<Step title="Finished" description="This is a description." />`}</p>
          <p>{`<Step title="In Progress" description="This is a description." />`}</p>
          <p>{`<Step title="Waiting" description="This is a description." />`}</p>
          <p>{`</Stepping>`}</p>

        </code>
      </div>
    </div>
  );
}

export default SteppingSandbox;