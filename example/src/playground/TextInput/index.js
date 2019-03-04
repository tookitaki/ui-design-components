import React from 'react';
import { TextInput } from 'ui-design-components';

const sampleSuccessState = {
  state: 'success',
};

const sampleDangerState = {
  message: 'this is what went wrong',
  state: 'danger',
};

const TextInputSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>TextInput Component</h4>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-4 offset-sm-1">
          <TextInput />
        </div>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-4 offset-sm-1">
          <TextInput label="field label" />
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`// Input without label`}</p>
          <p>{`<TextInput />`}</p>

          <br />
          <br />

          <p>{`// Input with label`}</p>
          <p>{`<TextInput label="field label" />`}</p>


        </code>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-4 offset-sm-1">
          <TextInput validation={sampleSuccessState} />
        </div>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-4 offset-sm-1">
          <TextInput validation={sampleSuccessState} label="field label" />
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { TextInput } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`const sampleSuccessState = {`}</p>
          <p>{`  state: 'success',`}</p>
          <p>{`};`}</p>

          <br />
          <br />

          <p>{`// Inputs with success states`}</p>
          <p>{`<TextInput validation={sampleSuccessState} />`}</p>
          <p>{`<TextInput validation={sampleSuccessState} label="field label" />`}</p>

        </code>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-4 offset-sm-1">
          <TextInput validation={sampleDangerState} />
        </div>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-4 offset-sm-1">
          <TextInput validation={sampleDangerState} label="field label" />
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { TextInput } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`const sampleDangerState = {`}</p>
          <p>{`  message: 'this is what went wrong',`}</p>
          <p>{`  state: 'danger',`}</p>
          <p>{`};`}</p>

          <br />
          <br />


          <p>{`// Inputs with danger states`}</p>
          <p>{`<TextInput validation={sampleDangerState} />`}</p>
          <p>{`<TextInput validation={sampleDangerState} label="field label" />`}</p>

        </code>
      </div>
    </div>
  );
}

export default TextInputSandbox;

