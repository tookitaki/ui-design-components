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

      <ul style={{ background: '#335577' }} className={'list-inline clearfix'}>
        <FigureItem figure={figure} tips={tips} />
        <FigureItem figure={figure} tips={tips} />
        <FigureItem figure={figure} tips={tips} />
      </ul>
    </div>
  );
}

export default FigureItemSandbox;