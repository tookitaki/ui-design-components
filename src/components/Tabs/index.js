import React from 'react'; 
import { Tabs } from 'antd';

export const { TabPane } = Tabs;

export const TTTabs = props => {
  return <Tabs {...props}>{props.children}</Tabs>
}
