import React from 'react';
import { Tabs } from 'antd';

import CircularProgressBarSandbox from './sandboxes/CircularProgressBar';
import FigureItemSandbox from './sandboxes/FigureItem';
import FilterDropdownSandbox from './sandboxes/FilterDropdown';
import RangeDtPickerSandbox from './sandboxes/RangedDtPicker';
import SearchBarSandbox from './sandboxes/SearchBar';
import SemiCircularBarSandbox from './sandboxes/SemiCircularBar';
import StatusFilterSandbox from './sandboxes/StatusFilter';
import { UniTableSandbox, UniTableSearchSandbox } from './sandboxes/UniTable';
import Wait4MeSandbox from './sandboxes/Wait4Me';

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