import React from 'react';
import IconTextButtonSandbox from './buttonIconText';
import IconButtonSandbox from './buttonIcon';
import GroupedButtonSandbox from './groupedButton';
import { Button, ButtonSecondary, ButtonTertiary } from 'ui-design-components';

const ButtonSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>Button Component</h4>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-1 offset-sm-1">
          <Button>button</Button>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <Button size="md">button</Button>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <Button size="sm">button</Button>
        </div>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-1 offset-sm-1">
          <Button disabled>button</Button>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <Button disabled size="md">button</Button>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <Button disabled size="sm">button</Button>
        </div>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-1 offset-sm-1">
          <ButtonSecondary>button</ButtonSecondary>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <ButtonSecondary size="md">button</ButtonSecondary>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <ButtonSecondary size="sm">button</ButtonSecondary>
        </div>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-1 offset-sm-1">
          <ButtonTertiary>button</ButtonTertiary>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <ButtonTertiary size="md">button</ButtonTertiary>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <ButtonTertiary size="sm">button</ButtonTertiary>
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { Button, ButtonSecondary, ButtonTertiary } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`<Button>Sample Text</Button>`}</p>
          <p>{`<Button disabled>Sample Text</Button>`}</p>

          <br />
          <br />
          <br />

          <p>{`<ButtonSecondary>Sample Text</ButtonSecondary>`}</p>

          <br />
          <br />
          <br />

          <p>{`<ButtonTertiary>Sample Text</ButtonTertiary>`}</p>

          <br />
          <br />
          <br />

          <p>{`// You can provide size of the button whenever you prefer to use another size as stated below`}</p>

          <br />
          <br />
          <br />

          <p>{`<Button size="sm">Sample Text</Button>`}</p>
          <p>{`<Button size="md">Sample Text</Button>`}</p>
          <p>{`<Button size="lg">Sample Text</Button>`}</p>

          <br />
          <br />

          <p>{`// Size can also be passed on other button types as well.`}</p>
        </code>
      </div>

      <GroupedButtonSandbox />

      <IconButtonSandbox />

      <IconTextButtonSandbox />
    </div>
  );
}

export default ButtonSandbox;

