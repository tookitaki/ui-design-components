import React from 'react';
import { Button, Drawer } from 'ui-design-components';

class DrawerSandbox extends React.Component {
  state = {
    isVisible: false,
  };

  onButtonClick = () => {
    const { isVisible } = this.state;

    this.setState({
      ...this.state,
      isVisible: !isVisible,
    });
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div>
        <div style={{ marginBottom: '30px' }} className="row col-sm-12">
          <h4>Drawer Component</h4>
        </div>

        <div className="row col-sm-12">
          <Button size="sm" onClick={this.onButtonClick}>Open Drawer</Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={true}
            visible={isVisible}
          >
            <Button size="sm" onClick={this.onButtonClick}>Close Drawer</Button>
          </Drawer>
        </div>

        <div className="row col-sm-12" style={{ marginTop: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
          <code>
            <p>{`import { Button, Drawer } from 'ui-design-components';`}</p>
            <br />
            <br />
            <br />

            <p>{`onButtonClick = () => {`}</p>
            <p>{`   const { isVisible } = this.state;`}</p>
            <p>{`   this.setState({`}</p>
            <p>{`     ...this.state,`}</p>
            <p>{`     isVisible: !isVisible,`}</p>
            <p>{`   });`}</p>
            <p>{`}`}</p>

            <br />
            <br />
            <br />

            <p>{`<Button onClick={this.onButtonClick}>Open Drawer</Button>`}</p>
            <p>{`<Drawer`}</p>
            <p>{`title="Basic Drawer"`}</p>
            <p>{`placement="right"`}</p>
            <p>{`closable={true}`}</p>
            <p>{`visible={isVisible}`}</p>
            <p>{`>`}</p>

          </code>
        </div>
      </div>
    );
  }
}

export default DrawerSandbox;