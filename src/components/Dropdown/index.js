import React from 'react';
import Select from 'antd/lib/select';
const Option = Select.Option;

const Dropdown = (props) => {
  return (
    <Select {...props} />
  );
}

const MultiDropdown = (props) => {
  return (
    <Select
      {...props}
      mode="multiple">
    </Select>
  );
}

export { Dropdown, MultiDropdown, Option }