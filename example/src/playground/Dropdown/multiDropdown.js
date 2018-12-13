import React from 'react';
import { MultiDropdown, Option } from 'ui-design-components';

const MultiDropdownSandbox = ({ sampleItems, defaultValue, labelKey, valueKey }) => {
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
      <div style={{ marginBottom: '30px', marginTop: '30px' }} className="row col-sm-12">
        <h5>MultiDropdown use case</h5>
      </div>
      
      <div className="row">
        <div className="col-sm-3 offset-sm-2">
          <MultiDropdown
            style={{ width: '100%' }}
            defaultValue={defaultValue}
            placeholder="Sample Multidropdown"
            handleChange={() => {}}>
            {dropdownOptions}
          </MultiDropdown>
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>Please refer to Ant Design's Dropdown Components for the available props</p>
        </code>
      </div>
    </div>
  );
}

export default MultiDropdownSandbox;