import React from 'react';
import { Dropdown } from 'ui-design-components';

const DropdownSandbox = ({ sampleItems }) => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>Dropdown Component</h4>
      </div>

      <div className="row">
        <div className="col-sm-3 offset-sm-2">
          <Dropdown
            items={sampleItems}
            placeholder="Sample Dropdown"
            handleChange={() => {}}
          />
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px', fontSize: '10px' }}>
        <code>
          <p>{`import { Dropdown } from 'ui-design-components';`}</p>
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
          <p>&emsp;&emsp;&emsp;&emsp;{`<Dropdown`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`items={sampleItems}`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`placeholder="Sample Dropdown"`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`handleChange={() => {}} />`}</p>
          <p>&emsp;&emsp;{`</div>`}</p>
          <p>{`</div>`}</p>
        </code>
      </div>
    </div>
  );
}

export default DropdownSandbox;