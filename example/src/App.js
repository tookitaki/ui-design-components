import React, { Component } from 'react';

import CircularProgressBarSandbox from './Sandboxes/CircularProgressBar';
import FigureItemSandbox from './Sandboxes/FigureItem';
import FilterDropdownSandbox from './Sandboxes/FilterDropdown';
import RangeDtPickerSandbox from './Sandboxes/RangedDtPicker';
import SearchBarSandbox from './Sandboxes/SearchBar';
import StatusFilterSandbox from './Sandboxes/StatusFilter';
import { UniTableSandbox, UniTableSearchSandbox } from './Sandboxes/UniTable';
import Wait4MeSandbox from './Sandboxes/Wait4Me';

const App = () => {
  return (
    <div>
      <Wait4MeSandbox />

      <FigureItemSandbox />

      <RangeDtPickerSandbox />

      <StatusFilterSandbox />

      <FilterDropdownSandbox />

      <CircularProgressBarSandbox />

      <SearchBarSandbox />

      <UniTableSandbox />

      <UniTableSearchSandbox />
    </div>
  )
}


export default App;