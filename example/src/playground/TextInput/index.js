import React from 'react';
import { TextInput } from 'ui-design-components';

const TextInputSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>TextInput Component</h4>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-3 offset-sm-1">
          <TextInput label="field label" />
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { TextInput } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`<TextInput />`}</p>

        </code>
      </div>
    </div>
  );
}

export default TextInputSandbox;

