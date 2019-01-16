import React from 'react';
import Select from 'antd/lib/select';
const Option = Select.Option;

const Dropdown = (props) => {
  return (
    <Select style={{ width: '100%' }} {...props} />
  );
}

const MultiDropdown = (props) => {
  return (
    <Select
      style={{ width: '100%' }}
      {...props}
      mode="multiple">
    </Select>
  );
}

export { Dropdown, MultiDropdown, Option }
