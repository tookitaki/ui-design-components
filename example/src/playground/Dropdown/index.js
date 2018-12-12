import React from 'react';
import DropdownSandbox from './dropdown';
import MultiDropdownSandbox from './multiDropdown';

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

const GeneralDropdownSandbox = () => {
  return (
    <div>
      <DropdownSandbox sampleItems={sampleItems} defaultValue={3} valueKey="value" labelKey="label" />

      <hr />
      <hr />

      <MultiDropdownSandbox sampleItems={sampleItems} defaultValue={[1, 2]}  valueKey="value" labelKey="label" />
    </div>
  );
}

export default GeneralDropdownSandbox;