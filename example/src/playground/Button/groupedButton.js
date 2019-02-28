import React from 'react';
import { Button } from 'antd';
import { GroupedButton } from 'ui-design-components';

const GroupedButtonSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>Grouped Button Component</h4>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-12">
          <GroupedButton>
            <Button>button</Button>
            <Button>button</Button>
            <Button>button</Button>
            <Button>button</Button>
            <Button>button</Button>
          </GroupedButton>
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`// You can use Ant Design's Button inside of the GroupedButton wrapper`}</p>
          <p>{`// Please refer to Ant Design's documentation for more details`}</p>
        </code>
      </div>

      
    </div>
  );
}

export default GroupedButtonSandbox;

