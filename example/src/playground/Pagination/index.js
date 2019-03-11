import React from 'react';
import { Pagination } from 'ui-design-components';
import ContractedPagination from './contractedPagination';
import JumperPagination from './jumperPagination';
import SmallPagination from './smallPagination';

const PaginationSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>Pagination Component</h4>
      </div>

      <div className="row col-sm-12">
        <p><b>Basic Pagination</b></p>
      </div>

      <div className="row col-sm-12">
        <p><small>Please refer to Ant Design's documentation for Pagination for props info</small></p>
      </div>

      <div className="row col-sm-12" style={{marginBottom: '50px'}}>
        <Pagination defaultCurrent={1} total={50} />
      </div>

      <div className="row col-sm-12" style={{ marginBottom: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { Pagination } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`<Pagination defaultCurrent={1} total={50} />`}</p>

        </code>
      </div>

      <ContractedPagination />
      <JumperPagination />
      <SmallPagination />
    </div>
  );
}

export default PaginationSandbox;