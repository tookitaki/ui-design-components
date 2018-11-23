import React from 'react';
import PanelSandbox from './panel';
import CollapsiblePanelSandbox from './collapsiblePanel';

const GeneralPanelSandbox = () => {
  return (
    <div>
      <PanelSandbox />

      <hr />
      <hr />

      <CollapsiblePanelSandbox />
    </div>
  );
}

export default GeneralPanelSandbox;