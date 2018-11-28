import React from 'react';
import { Panel } from 'ui-design-components';

const renderPanelHeader = () => {
  return (
    <span style={{ color: '#fff', fontWeight: '400', fontSize: '1rem' }}>Sample Header</span>
  );
}

const CollapsiblePanelSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h5>Collapsible Panel Component</h5>
      </div>
      
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <Panel
            isCollapsible={true}
            title={renderPanelHeader()}>
            <h4>Sample Body</h4>
          </Panel>
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { Panel } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`const renderPanelHeader = () => {`}</p>
          <p>&emsp;&emsp;{`return (`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;{`<span style={{ color: '#fff', fontWeight: '400', fontSize: '1rem' }}>Sample Header</span>`}</p>
          <p>&emsp;&emsp;{`);`}</p>
          <p>{`}`}</p>

          <br />
          <br />
          <br />


          <p>{`<div className="row">`}</p>
          <p>&emsp;&emsp;{`<div className="col-sm-8 offset-sm-2">`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;{`<Panel`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;{`title={renderPanelHeader()}>`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;{`<h4>Sample Body</h4>`}</p>
          <p>&emsp;&emsp;&emsp;&emsp;{`</Panel>`}</p>
          <p>&emsp;&emsp;{`</div>`}</p>
          <p>{`</div>`}</p>
        </code>
      </div>
    </div>
  );
}

export default CollapsiblePanelSandbox;