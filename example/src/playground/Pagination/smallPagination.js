import React from 'react';
import { Pagination } from 'ui-design-components';

const SmallPagination = () => {
  return (
    <div>
      <div className="row col-sm-12">
        <p><b>Small Pagination variety</b></p>
      </div>

      <div className="row col-sm-12" style={{marginBottom: '50px'}}>
        <Pagination size="small" total={50} />
      </div>

      <div className="row col-sm-12" style={{marginBottom: '50px'}}>
        <Pagination size="small" total={50} showSizeChanger showQuickJumper />
      </div>

      <div className="row col-sm-12" style={{marginBottom: '50px'}}>
        <Pagination size="small" simple defaultCurrent={2} total={50} />
      </div>

      <div className="row col-sm-12" style={{ marginBottom: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { Pagination } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`<Pagination size="small" total={50} />`}</p>
          <p>{`<Pagination size="small" total={50} showSizeChanger showQuickJumper />`}</p>
          <p>{`<Pagination size="small" simple defaultCurrent={2} total={50} />`}</p>
        </code>
      </div>
    </div>
  );
}

export default SmallPagination;