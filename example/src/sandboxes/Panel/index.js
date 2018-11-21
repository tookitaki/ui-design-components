import React from 'react';
import { Panel } from 'ui-design-components';

const renderPanelHeader = () => {
  return (
    <span style={{ color: '#fff', fontWeight: '400', fontSize: '1rem' }}>Sample Header</span>
  );
}

const PanelSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>Panel Component</h4>
      </div>
      
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <Panel
            title={renderPanelHeader()}>
            <h4>Sample Body</h4>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export default PanelSandbox;