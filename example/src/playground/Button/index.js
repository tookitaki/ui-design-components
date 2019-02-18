import React from 'react';
import { Button } from 'ui-design-components';

const ButtonSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>Button Component</h4>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-4 offset-sm-1">
          <Button disabled>Sample Text</Button>
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { Button } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`<Button`}</p>
          <p>&emsp;&emsp;{`text="Sample Text />"`}</p>
        </code>
      </div>
    </div>
  );
}

export default ButtonSandbox;
