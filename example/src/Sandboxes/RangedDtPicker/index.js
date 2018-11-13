import React from 'react';
import moment from 'moment';

import { RangedDtPicker } from 'ui-design-components';

export default class RangedDtPickerSandbox extends React.Component {
  state = {
    dateRange: {
      startDate: moment().subtract(1, 'months'),
      endDate: moment(),
      activeRangeNo: 2
    },
  };

  onDatesChange = (start, end, rangeNo) => {
    const newDateRange = {
      startDate: start, 
      endDate: end,
      activeRangeNo: rangeNo
    }

    this.setState({
      ...this.state,
      dateRange: newDateRange
    })
  }

  render() {
    const { dateRange } = this.state;

    if (dateRange) {
      const { startDate, endDate, activeRangeNo } = dateRange;
      return (
        <div>
          <div style={{ marginBottom: '30px' }} className="row col-sm-12">
            <h4>RangedDtPicker Component</h4>
          </div>
        
          <div className="row">
            <div className="col-sm-8 offset-sm-1">
              <RangedDtPicker
                startDate={startDate}
                endDate={endDate}
                activeRangeNo={activeRangeNo}
                onDatesChange={this.onDatesChange} />
            </div>
          </div>

          <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
            <code>
              <p>{`import { RangedDtPicker } from 'ui-design-components';`}</p>
              <br />
              <br />
              <br />

              <p>{`const { startDate, endDate, activeRangeNo } = dateRange;`}</p>

              <br />
              <br />
              <br />

              <p>{`<RangedDtPicker`}</p>
              <p>&emsp;&emsp;{`startDate={startDate}`}</p>
              <p>&emsp;&emsp;{`endDate={endDate}`}</p>
              <p>&emsp;&emsp;{`activeRangeNo={activeRangeNo}`}</p>
              <p>&emsp;&emsp;{`onDatesChange={this.onDatesChange} />`}</p>
            </code>
          </div>
        </div>
      );
    }

    return null;
  }
}