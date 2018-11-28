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

          <div className="row">
            <div className="col-sm-8 offset-sm-1">
              <StatusFilter
                filterData={statusFilterData}
                statusData={statusData}
                activeIndex={activeStatusNo}
                handleClick={this.onStatusFilterChange} />
            </div>
          </div>

          <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
            <code>
              <p>{`import { StatusFilter } from 'ui-design-components';`}</p>
              <br />
              <br />
              <br />

              <p>{`const statusFilterData = {
                    "all": 4,
                    "open": 2,
                    "under_investigation": 1,
                    "closed": 1
                  }`}
              </p>

              <p>{`const statusData = [
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
                ];`}
              </p>

              <br />
              <br />
              <br />

              <p>{`<StatusFilter`}</p>
              <p>&emsp;&emsp;{`filterData={statusFilterData}`}</p>
              <p>&emsp;&emsp;{`statusData={statusData}`}</p>
              <p>&emsp;&emsp;{`activeIndex={activeStatusNo}`}</p>
              <p>&emsp;&emsp;{`handleClick={this.onStatusFilterChange} />`}</p>
            </code>
          </div>
        </div>
      );
    }

    return null;
  }
}