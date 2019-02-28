import React from 'react';
import { Button, ButtonSecondary, ButtonTertiary } from 'ui-design-components';

const IconButtonSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>Icon Button Component</h4>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-1 offset-sm-1">
          <Button>
            <i className="fa fa-cloud"></i>
          </Button>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <Button size="md">
            <i className="fa fa-cloud"></i>
          </Button>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <Button size="sm">
            <i className="fa fa-cloud"></i>
          </Button>
        </div>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-1 offset-sm-1">
          <Button disabled>
            <i className="fa fa-cloud"></i>
          </Button>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <Button disabled size="md">
            <i className="fa fa-cloud"></i>
          </Button>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <Button disabled size="sm">
            <i className="fa fa-cloud"></i>
          </Button>
        </div>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-1 offset-sm-1">
          <ButtonSecondary>
            <i className="fa fa-cloud"></i>
          </ButtonSecondary>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <ButtonSecondary size="md">
            <i className="fa fa-cloud"></i>
          </ButtonSecondary>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <ButtonSecondary size="sm">
            <i className="fa fa-cloud"></i>
          </ButtonSecondary>
        </div>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-1 offset-sm-1">
          <ButtonTertiary>
            <i className="fa fa-cloud"></i>
          </ButtonTertiary>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <ButtonTertiary size="md">
            <i className="fa fa-cloud"></i>
          </ButtonTertiary>
        </div>

        <div className="col-sm-1 offset-sm-1">
          <ButtonTertiary size="sm">
            <i className="fa fa-cloud"></i>
          </ButtonTertiary>
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { Button, ButtonSecondary, ButtonTertiary } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`<Button><i className="fa fa-cloud"></i></Button>`}</p>
          <p>{`<Button disabled><i className="fa fa-cloud"></i></Button>`}</p>

          <br />
          <br />
          <br />

          <p>{`<ButtonSecondary><i className="fa fa-cloud"></i></ButtonSecondary>`}</p>

          <br />
          <br />
          <br />

          <p>{`<ButtonTertiary><i className="fa fa-cloud"></i></ButtonTertiary>`}</p>

          <br />
          <br />
          <br />

          <p>{`// You can provide size of the button whenever you prefer to use another size as stated below`}</p>

          <br />
          <br />
          <br />

          <p>{`<Button size="sm"><i className="fa fa-cloud"></i></Button>`}</p>
          <p>{`<Button size="md"><i className="fa fa-cloud"></i></Button>`}</p>
          <p>{`<Button size="lg"><i className="fa fa-cloud"></i></Button>`}</p>

          <br />
          <br />

          <p>{`// Size can also be passed on other button types as well.`}</p>
        </code>
      </div>
    </div>
  );
}

export default IconButtonSandbox;

