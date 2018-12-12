import React from 'react';
import { MultiDropdown } from 'ui-design-components';

const MultiDropdownSandbox = ({ sampleItems, defaultValue, labelKey, valueKey }) => {
  return (
    <div>
      <div style={{ marginBottom: '30px', marginTop: '30px' }} className="row col-sm-12">
        <h5>MultiDropdown use case</h5>
      </div>
      
      <div className="row">
        <div className="col-sm-3 offset-sm-2">
          <MultiDropdown
            items={sampleItems}
            labelKey={labelKey}
            valueKey={valueKey}
            defaultValue={defaultValue}
            placeholder="Sample Multidropdown"
            handleChange={() => {}} />
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px', fontSize: '10px' }}>
        <code>
          <p>{`import { MultiDropdown } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`const sampleItems = [`}</p>
          <p>&emsp;&emsp;{`{`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;{`label: 'Item 1',`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;{`value: 1`}</p>
          <p>&emsp;&emsp;{`},`}</p>
          <p>&emsp;&emsp;{`{`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;{`label: 'Item 2',`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;{`value: 2`}</p>
          <p>&emsp;&emsp;{`},`}</p>
          <p>&emsp;&emsp;{`{`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;{`label: 'Item 3',`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;{`value: 3`}</p>
          <p>&emsp;&emsp;{`},`}</p>
          <p>{`];`}</p>

          <br />
          <br />
          <br />


          <p>{`<div className="row">`}</p>
          <p>&emsp;&emsp;{`<div className="col-sm-3 offset-sm-2">`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;{`<MultiDropdown`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`items={sampleItems}`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`labelKey="label"`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`valueKey="value"`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`defaultValue={[1, 2, 3]}`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`placeholder="Sample Multidropdown"`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`handleChange={() => {}} />`}</p>
          <p>&emsp;&emsp;{`</div>`}</p>
          <p>{`</div>`}</p>
        </code>
      </div>
    </div>
  );
}

export default MultiDropdownSandbox;