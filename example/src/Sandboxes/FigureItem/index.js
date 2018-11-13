import React from 'react';
import { FigureItem } from 'ui-design-components';

const figure = {value: 123, previous_value: 112, name: "example"};
const tips = "tips example";

const FigureItemSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>FigureItem Component</h4>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <ul style={{ background: '#335577' }} className={'list-inline clearfix'}>
            <FigureItem figure={figure} tips={tips} />
            <FigureItem figure={figure} tips={tips} />
            <FigureItem figure={figure} tips={tips} />
          </ul>
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { FigureItem } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`const figure = {value: 123, previous_value: 112, name: "example"};`}</p>
          <p>{`const tips = "tips example";`}</p>

          <br />
          <br />
          <br />

          <p>{`<ul style={{ background: '#335577' }} className={'list-inline clearfix'}>`}</p>
          <p>&emsp;&emsp;{`<FigureItem figure={figure} tips={tips} />`}</p>
          <p>&emsp;&emsp;{`<FigureItem figure={figure} tips={tips} />`}</p>
          <p>&emsp;&emsp;{`<FigureItem figure={figure} tips={tips} />`}</p>
          <p>{`</ul>`}</p>
        </code>
      </div>
    </div>
  );
}

export default FigureItemSandbox;