import React from 'react';
import { UniTable, SearchBar } from 'ui-design-components';

const UniTable_SAMPLE_COLUMNS = [
  {
    "id": "name",
    "name": "Name"
  },
  {
    "id": "age",
    "name": "Age (yrs)"
  },
  {
    "id": "gender",
    "name": "Gender"
  },
  {
    "id": "occupation",
    "name": "Occupation"
  },
  {
    "id": "culture",
    "name": "Culture"
  },
  {
    "id": "top_3_wc_matches",
    "name": "Top 3 WC Matches"
  },
  {
    "id": "biz_segment",
    "name": "Business Segment"
  },
  {
    "id": "customer_id",
    "name": "Customer ID"
  }
];
const UniTable_SAMPLE_DATA = [
  {
    "id": "cstm0000001",
    "customer_id": "cstm0000001",
    "name": "LI JUN",
    "age": 31,
    "gender": "Male",
    "occupation": "Media",
    "culture": "Chinese",
    "top_3_wc_matches": [
      "Li JUN",
      "LI JUN",
      "Li JUN"
    ],
    "biz_segment": "Corp Bank Singapore",
  },
  {
    "id": "cstm0000002",
    "customer_id": "cstm0000002",
    "name": "ISLAM SAIFUL",
    "age": 21,
    "gender": "Female",
    "occupation": "Businessman",
    "culture": "Malay",
    "top_3_wc_matches": [
      "ISLAM SAIFUL",
      "ISLAM SAIFUL",
      "ISLAM SAIFUL"
    ],
    "biz_segment": "Private Bank Singapore",
  },
  {
    "id": "cstm0000001",
    "customer_id": "cstm0000001",
    "name": "WEI WANG SHU",
    "age": 31,
    "gender": "Male",
    "occupation": "Media",
    "culture": "Chinese",
    "top_3_wc_matches": [
      "WEI WANG SHU",
      "WEI WANG SHU",
      "WEI WANG SHU"
    ],
    "biz_segment": "Corp Bank Singapore",
  },
  {
    "id": "cstm0000002",
    "customer_id": "cstm0000002",
    "name": "LI WEI",
    "age": 21,
    "gender": "Female",
    "occupation": "Businessman",
    "culture": "Chinese",
    "top_3_wc_matches": [
      "LI WEI",
      "LI WEI",
      "LI WEI"
    ],
    "biz_segment": "Private Bank Singapore",
  },
  {
    "id": "cstm0000013",
    "customer_id": "cstm0000003",
    "name": "Wang Tao",
    "age": 21,
    "gender": "Female",
    "occupation": "Sales",
    "culture": "Chinese",
    "top_3_wc_matches": [
      "Ang Tao",
      "Ang Tao",
      "Ang Tao"
    ],
    "biz_segment": "PFS-Mass",
  },
  {
    "id": "cstm0000023",
    "customer_id": "cstm0000003",
    "name": "Wang Jia",
    "age": 21,
    "gender": "Female",
    "occupation": "Sales",
    "culture": "Chinese",
    "top_3_wc_matches": [
      "Wang Tao",
      "Wang Tao",
      "Wong Tao"
    ],
    "biz_segment": "PFS-Mass",
  },
  {
    "id": "cstm0000103",
    "customer_id": "cstm0000203",
    "name": "Jia Tao",
    "age": 21,
    "gender": "Female",
    "occupation": "Sales",
    "culture": "Chinese",
    "top_3_wc_matches": [
      "Ia Tao",
      "Ia Tao",
      "Ia Tao"
    ],
    "biz_segment": "PFS-Mass",
  }
];
const UniTable_SAMPLE_TABLEFILTER = {
  "Parameters": {
    "alerts": true,
  }
};

export const UniTableSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>UniTable Component</h4>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <UniTable
          name="Individual"
          filterKey="Parameters"
          columns={UniTable_SAMPLE_COLUMNS}
          data={UniTable_SAMPLE_DATA}
          tableFilter={UniTable_SAMPLE_TABLEFILTER}
        />
      </div>
    </div>
  );
}

export class UniTableSearchSandbox extends React.Component {
  state = {
    uniTableItems: UniTable_SAMPLE_DATA,
  };

  onFilterUniTable = filteredUniTableItems => {
    this.setState({
      ...this.state,
      uniTableItems: filteredUniTableItems,
    });
  }

  render() {
    const { uniTableItems } = this.state;
    if (uniTableItems) {
      return (
        <div>
          <div style={{ marginBottom: '30px' }} className="row col-sm-12">
            <h4>UniTable Component with Search</h4>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <SearchBar initialItems={UniTable_SAMPLE_DATA} id="id" onFilter={this.onFilterUniTable} />
            <UniTable
              name="Individual"
              filterKey="Parameters"
              columns={UniTable_SAMPLE_COLUMNS}
              data={uniTableItems}
              tableFilter={UniTable_SAMPLE_TABLEFILTER}
            />
          </div>
        </div>
      );
    }

    return null;
  }
}