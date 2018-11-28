import React from 'react';
import { Wait4Me } from 'ui-design-components';

const Wait4MeSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
          <h4>Wait4Me Component</h4>
        </div>

      <div className="row">
       <Wait4Me />
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { Wait4Me } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`<Wait4Me />`}</p>
        </code>
      </div>
    </div>
  );
}

export default Wait4MeSandbox;