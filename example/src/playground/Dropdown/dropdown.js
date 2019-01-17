import React from 'react';
import { Dropdown, Option } from 'ui-design-components';

const DropdownSandbox = ({ sampleItems, defaultValue, labelKey, valueKey }) => {
  const dropdownOptions = sampleItems.map((item, idx) => {
    if (item) {
      return (
        <Option key={idx} value={item.value}>{item.label}</Option>
      );
    }

    return null;
  });

  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>Dropdown Component</h4>
      </div>

      <div className="row">
        <div className="col-sm-3 offset-sm-2">
          <Dropdown
            defaultValue={defaultValue}
            placeholder="Sample Dropdown"
            handleChange={() => {}}>
            {dropdownOptions}
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default DropdownSandbox;