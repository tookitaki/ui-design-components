import React from 'react';
import { MultiEntryField, Option } from 'ui-design-components';

const sampleValidation = {
  state: 'danger',
  message: 'error messag of importance'
};

const MultiEntryFieldSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>MultiEntryField Component</h4>
      </div>

      <div className="row col-sm-12">
        <p><small>Please refer to Ant Design's documentation for props info</small></p>
      </div>

      <div className="row col-sm-3" style={{marginBottom: '50px'}}>
        <MultiEntryField>
          <Option value={'1'}>Option 1</Option>
          <Option value={'2'}>Option 2</Option>
          <Option value={'3'}>Option 3</Option>
        </MultiEntryField>
      </div>

      <div className="row col-sm-12" style={{ marginBottom: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { MultiEntryField, Option } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`<MultiEntryField>`}</p>
          <p>{`<Option value={'1'}>Option 1</Option>`}</p>
          <p>{`<Option value={'2'}>Option 2</Option>`}</p>
          <p>{`<Option value={'3'}>Option 3</Option>`}</p>
          <p>{`</MultiEntryField>`}</p>

        </code>
      </div>

      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>Validation case</h4>
      </div>

      <div className="row col-sm-3" style={{marginBottom: '50px'}}>
        <MultiEntryField label="some field" validation={sampleValidation}>
          <Option value={'1'}>Option 1</Option>
          <Option value={'2'}>Option 2</Option>
          <Option value={'3'}>Option 3</Option>
        </MultiEntryField>
      </div>

      <div className="row col-sm-12" style={{ marginBottom: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { MultiEntryField, Option } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`const sampleValidation = {`}</p>
          <p>{`  state: 'danger',`}</p>
          <p>{`  message: 'error messag of importance'`}</p>
          <p>{`};`}</p>

          <br />
          <br />
          <br />

          <p>{`<MultiEntryField label="some field" validation={sampleValidation}>`}</p>
          <p>{`<Option value={'1'}>Option 1</Option>`}</p>
          <p>{`<Option value={'2'}>Option 2</Option>`}</p>
          <p>{`<Option value={'3'}>Option 3</Option>`}</p>
          <p>{`</MultiEntryField>`}</p>

        </code>
      </div>
    </div>
  );
}

export default MultiEntryFieldSandbox;