import React from 'react';
import { StatusFilter } from 'ui-design-components';

const statusFilterData = {
  "all": 4,
  "open": 2,
  "under_investigation": 1,
  "closed": 1
}
const statusData = [
  {
    name: "all",
    text: "All"
  },
  {
    name: "open",
    text: "Open"
  },
  {
    name: "under_investigation",
    text: "Under Investigation"
  },
  {
    name: "closed",
    text: "Closed"
  }
];

export default class StatusFilterSandbox extends React.Component {
  state = {
    activeStatusNo: 0,
  };

  onStatusFilterChange = (index) => {
    this.setState({
      ...this.state,
      activeStatusNo: index
    })
  }

  render() {
    const { activeStatusNo } = this.state;

    if (activeStatusNo !== null || activeStatusNo !== undefined) {
      return (
        <div>
          <div style={{ marginBottom: '30px' }} className="row col-sm-12">
            <h4>StatusFilter Component</h4>
          </div>

          <div className="row" style={{marginBottom: '10px'}}>
            <div className="col-sm-8 offset-sm-1">
              <StatusFilter
                filterData={statusFilterData}
                statusData={statusData}
                activeIndex={activeStatusNo}
                handleClick={this.onStatusFilterChange} />
            </div>
          </div>`
        </div>
      );
    }

    return null;
  }
}