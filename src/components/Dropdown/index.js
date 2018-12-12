import React from 'react';
import Select from 'antd/lib/select';
const Option = Select.Option;

const Dropdown = ({ items, placeholder, handleChange, defaultValue, labelKey, valueKey }) => {
  if (items && Array.isArray(items) && items.length > 0) {
    let dropdownOptions = items.map((item, idx) => {
      return (
        <Option key={idx} value={valueKey && item[valueKey] ? item[valueKey] : item}>
          {labelKey && item[labelKey] ? item[labelKey] : item}
        </Option>
      );
    });

    return (
      <Select
        style={{ width: '100%' }}
        placeholder={placeholder || 'Please select an item'}
        defaultValue={defaultValue}
        onChange={handleChange}>
        { dropdownOptions }
      </Select>
    );
  }

  return (
    <Select
      style={{ width: '100%' }}
      placeholder={placeholder || 'No items available'}
      defaultValue="disabled">
      <Option value="disabled" disabled>No items available</Option>
    </Select>
  );
}

const MultiDropdown = ({ items, placeholder, handleChange, defaultValue, valueKey, labelKey }) => {
  if (items && Array.isArray(items) && items.length > 0) {
    let dropdownOptions = items.map((item, idx) => {
      return (
        <Option key={idx} value={valueKey && item[valueKey] ? item[valueKey] : item}>
          {labelKey && item[labelKey] ? item[labelKey] : item}
        </Option>
      );
    });

    return (
      <Select
        style={{ width: '100%' }}
        mode="multiple"
        defaultValue={defaultValue}
        placeholder={placeholder || 'Please select an item'}
        onChange={handleChange}>
        { dropdownOptions }
      </Select>
    );
  }

  return (
    <Select
      style={{ width: '100%' }}
      placeholder={placeholder || 'No items available'}
      defaultValue="disabled">
      <Option value="disabled" disabled>No items available</Option>
    </Select>
  );
}

export { Dropdown, MultiDropdown }