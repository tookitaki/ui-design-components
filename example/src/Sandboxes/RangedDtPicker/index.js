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
        
          <div className="row" style={{marginBottom: '10px'}}>
            <div className="col-sm-8 offset-sm-1">
              <RangedDtPicker
                startDate={startDate}
                endDate={endDate}
                activeRangeNo={activeRangeNo}
                onDatesChange={this.onDatesChange} />
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}