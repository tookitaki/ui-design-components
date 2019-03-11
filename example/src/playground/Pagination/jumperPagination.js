import React from 'react';
import { Pagination } from 'ui-design-components';

const JumperPagination = () => {
  return (
    <div>
      <div className="row col-sm-12">
        <p><b>Jumper Pagination</b></p>
      </div>

      <div className="row col-sm-12" style={{marginBottom: '50px'}}>
        <Pagination showQuickJumper defaultCurrent={2} total={500} />
      </div>

      <div className="row col-sm-12" style={{ marginBottom: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { Pagination } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`<Pagination showQuickJumper defaultCurrent={2} total={500} />`}</p>
        </code>
      </div>
    </div>
  );
}

export default JumperPagination;