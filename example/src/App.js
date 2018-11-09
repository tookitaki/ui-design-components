import React from 'react';
import { Tabs } from 'antd';

import CircularProgressBarSandbox from './Sandboxes/CircularProgressBar';
import FigureItemSandbox from './Sandboxes/FigureItem';
import FilterDropdownSandbox from './Sandboxes/FilterDropdown';
import RangeDtPickerSandbox from './Sandboxes/RangedDtPicker';
import SearchBarSandbox from './Sandboxes/SearchBar';
import SemiCircularBarSandbox from './Sandboxes/SemiCircularBar';
import StatusFilterSandbox from './Sandboxes/StatusFilter';
import { UniTableSandbox, UniTableSearchSandbox } from './Sandboxes/UniTable';
import Wait4MeSandbox from './Sandboxes/Wait4Me';

const TabPane = Tabs.TabPane;

const App = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      tabPosition="left">

      <TabPane tab="Wait4Me Sandbox" key="1"><Wait4MeSandbox /></TabPane>
      <TabPane tab="FigureItem Sandbox" key="2"><FigureItemSandbox /></TabPane>
      <TabPane tab="RangeDtPicker Sandbox" key="3"><RangeDtPickerSandbox /></TabPane>
      <TabPane tab="StatusFilter Sandbox" key="4"><StatusFilterSandbox /></TabPane>
      <TabPane tab="FilterDropdown Sandbox" key="5"><FilterDropdownSandbox /></TabPane>
      <TabPane tab="CircularProgressBar Sandbox" key="6"><CircularProgressBarSandbox /></TabPane>
      <TabPane tab="SemiCircularBar Sandbox" key="7"><SemiCircularBarSandbox /></TabPane>
      <TabPane tab="SearchBar Sandbox" key="8"><SearchBarSandbox /></TabPane>
      <TabPane tab="UniTable Sandbox" key="9"><UniTableSandbox /></TabPane>
      <TabPane tab="UniTableSearch Sandbox" key="10"><UniTableSearchSandbox /></TabPane>

    </Tabs>
  );
}


export default App;