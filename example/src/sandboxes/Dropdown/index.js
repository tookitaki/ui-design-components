import React from 'react';
import { Dropdown, MultiDropdown } from 'ui-design-components';

const sampleItems = [
  {
    label: 'Item 1',
    value: 1
  },
  {
    label: 'Item 2',
    value: 2
  },
  {
    label: 'Item 3',
    value: 3
  },
];

const DropdownSandbox = () => {
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

      <div style={{ marginBottom: '30px', marginTop: '30px' }} className="row col-sm-12">
        <h4>MultiDropdown use case</h4>
      </div>
      
      <div className="row">
        <div className="col-sm-3 offset-sm-2">
          <MultiDropdown
            items={sampleItems}
            placeholder="Sample Multidropdown"
            handleChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default DropdownSandbox;