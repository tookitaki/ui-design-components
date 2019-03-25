import React from 'react';
import { Tabs } from 'antd';

import ButtonSandbox from './playground/Button';
import CircularProgressBarSandbox from './playground/CircularProgressBar';
import DropdownSandbox from './playground/Dropdown';
import FigureItemSandbox from './playground/FigureItem';
import FilterDropdownSandbox from './playground/FilterDropdown';
import LinkSandbox from './playground/Link';
import MultiEntryFieldSandbox from './playground/MultiEntryField';
import PaginationSandbox from './playground/Pagination';
import PanelSandbox from './playground/Panel';
import RangeDtPickerSandbox from './playground/RangedDtPicker';
import SearchBarSandbox from './playground/SearchBar';
import SemiCircularBarSandbox from './playground/SemiCircularBar';
import StatusFilterSandbox from './playground/StatusFilter';
import TextInputSandbox from './playground/TextInput';
import { UniTableSandbox, UniTableSearchSandbox } from './playground/UniTable';
import Wait4MeSandbox from './playground/Wait4Me';

const TabPane = Tabs.TabPane;

const App = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      tabPosition="left">

      <TabPane tab="Button Sandbox" key="1"><ButtonSandbox /></TabPane>
      <TabPane tab="CircularProgressBar Sandbox" key="2"><CircularProgressBarSandbox /></TabPane>
      <TabPane tab="Dropdown Sandbox" key="3"><DropdownSandbox /></TabPane>
      <TabPane tab="FigureItem Sandbox" key="4"><FigureItemSandbox /></TabPane>
      <TabPane tab="FilterDropdown Sandbox" key="5"><FilterDropdownSandbox /></TabPane>
      <TabPane tab="Link Sandbox" key="6"><LinkSandbox /></TabPane>
      <TabPane tab="MultiEntryField Sandbox" key="7"><MultiEntryFieldSandbox /></TabPane>
      <TabPane tab="Pagination Sandbox" key="8"><PaginationSandbox /></TabPane>
      <TabPane tab="Panel Sandbox" key="9"><PanelSandbox /></TabPane>
      <TabPane tab="RangeDtPicker Sandbox" key="10"><RangeDtPickerSandbox /></TabPane>
      <TabPane tab="StatusFilter Sandbox" key="11"><StatusFilterSandbox /></TabPane>
      <TabPane tab="SemiCircularBar Sandbox" key="12"><SemiCircularBarSandbox /></TabPane>
      <TabPane tab="SearchBar Sandbox" key="13"><SearchBarSandbox /></TabPane>
      <TabPane tab="TextInput Sandbox" key="14"><TextInputSandbox /></TabPane>
      <TabPane tab="UniTable Sandbox" key="15"><UniTableSandbox /></TabPane>
      <TabPane tab="UniTableSearch Sandbox" key="16"><UniTableSearchSandbox /></TabPane>
      <TabPane tab="Wait4Me Sandbox" key="17"><Wait4MeSandbox /></TabPane>

    </Tabs>
  );
}


export default App;