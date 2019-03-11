import React from 'react';
import { Pagination } from 'ui-design-components';

const ContractedPagination = () => {
  return (
    <div>
      <div className="row col-sm-12">
        <p><b>Contracted Pagination</b></p>
      </div>

      <div className="row col-sm-12" style={{marginBottom: '50px'}}>
        <Pagination defaultCurrent={6} total={500} />
      </div>

      <div className="row col-sm-12" style={{ marginBottom: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { Pagination } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`<Pagination defaultCurrent={6} total={500} />`}</p>
        </code>
      </div>
    </div>
  );
}

export default ContractedPagination;