import React from 'react';
import { Tabs } from 'antd';

import ButtonSandbox from './playground/Button';
import CircularProgressBarSandbox from './playground/CircularProgressBar';
import DrawerSandbox from './playground/Drawer';
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
import SteppingSandbox from './playground/Stepping';
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
      <TabPane tab="Drawer Sandbox" key="3"><DrawerSandbox /></TabPane>
      <TabPane tab="Dropdown Sandbox" key="4"><DropdownSandbox /></TabPane>
      <TabPane tab="FigureItem Sandbox" key="5"><FigureItemSandbox /></TabPane>
      <TabPane tab="FilterDropdown Sandbox" key="6"><FilterDropdownSandbox /></TabPane>
      <TabPane tab="Link Sandbox" key="7"><LinkSandbox /></TabPane>
      <TabPane tab="MultiEntryField Sandbox" key="8"><MultiEntryFieldSandbox /></TabPane>
      <TabPane tab="Pagination Sandbox" key="9"><PaginationSandbox /></TabPane>
      <TabPane tab="Panel Sandbox" key="10"><PanelSandbox /></TabPane>
      <TabPane tab="RangeDtPicker Sandbox" key="11"><RangeDtPickerSandbox /></TabPane>
      <TabPane tab="StatusFilter Sandbox" key="12"><StatusFilterSandbox /></TabPane>
      <TabPane tab="Stepping Sandbox" key="13"><SteppingSandbox /></TabPane>
      <TabPane tab="SemiCircularBar Sandbox" key="14"><SemiCircularBarSandbox /></TabPane>
      <TabPane tab="SearchBar Sandbox" key="15"><SearchBarSandbox /></TabPane>
      <TabPane tab="TextInput Sandbox" key="16"><TextInputSandbox /></TabPane>
      <TabPane tab="UniTable Sandbox" key="17"><UniTableSandbox /></TabPane>
      <TabPane tab="UniTableSearch Sandbox" key="18"><UniTableSearchSandbox /></TabPane>
      <TabPane tab="Wait4Me Sandbox" key="19"><Wait4MeSandbox /></TabPane>

    </Tabs>
  );
}


export default App;