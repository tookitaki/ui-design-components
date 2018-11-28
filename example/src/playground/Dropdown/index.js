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
      <DropdownSandbox sampleItems={sampleItems} />

      <hr />
      <hr />

      <MultiDropdownSandbox sampleItems={sampleItems} />
    </div>
  );
}

export default GeneralDropdownSandbox;