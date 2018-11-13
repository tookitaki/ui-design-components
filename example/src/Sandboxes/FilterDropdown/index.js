import React from 'react';
import { FilterDropdown } from 'ui-design-components';

const FilterDropdown_SAMPLE_FILTERGROUPDATA = {
  "title": "Business Parameters",
  "groupData": [
    {
      "title": "Parameters",
      "data": [
        {
          "id": "alerts",
          "name": "Alerts"
        },
        {
          "id": "hits",
          "name": "Hits"
        },
        {
          "id": "true_hits",
          "name": "True Hits"
        },
        {
          "id": "false_hits",
          "name": "False Hits"
        },
        {
          "id": "undetermined",
          "name": "Undetermined"
        },
        {
          "id": "auto_closed",
          "name": "Auto-Closed Hits"
        }
      ]
    }
  ]
};
const FilterDropdown_USERFILTERSETTING = {
  "Parameters": {
    "alerts": true,
    "hits": true,
    "true_hits": true,
    "false_hits": true,
    "undetermined": true,
    "auto_closed": true
  }
};

const FilterDropdownSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>FilterDropdown Component</h4>
      </div>
      
      <div className="row" style={{marginBottom: '10px'}}>
        <div className="offset-sm-8 col-sm-4">
          <FilterDropdown
            filterGroupData={FilterDropdown_SAMPLE_FILTERGROUPDATA}
            userFilterSetting={FilterDropdown_USERFILTERSETTING}
            handleConfirm={() => {}} />
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { FilterDropdown } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />

          <p>{`const FilterDropdown_SAMPLE_FILTERGROUPDATA = {
              "title": "Business Parameters",
              "groupData": [
                {
                  "title": "Parameters",
                  "data": [
                    {
                      "id": "alerts",
                      "name": "Alerts"
                    },
                    {
                      "id": "hits",
                      "name": "Hits"
                    },
                    {
                      "id": "true_hits",
                      "name": "True Hits"
                    },
                    {
                      "id": "false_hits",
                      "name": "False Hits"
                    },
                    {
                      "id": "undetermined",
                      "name": "Undetermined"
                    },
                    {
                      "id": "auto_closed",
                      "name": "Auto-Closed Hits"
                    }
                  ]
                }
              ]
            };`}
          </p>

          <p>{`const FilterDropdown_USERFILTERSETTING = {
              "Parameters": {
                "alerts": true,
                "hits": true,
                "true_hits": true,
                "false_hits": true,
                "undetermined": true,
                "auto_closed": true
              }
            };`}
          </p>

          <br />
          <br />
          <br />

          <p>{`<FilterDropdown`}</p>
          <p>&emsp;&emsp;{`filterGroupData={FilterDropdown_SAMPLE_FILTERGROUPDATA}`}</p>
          <p>&emsp;&emsp;{`userFilterSetting={FilterDropdown_USERFILTERSETTING}`}</p>
          <p>&emsp;&emsp;{`handleConfirm={() => {}} />`}</p>
        </code>
      </div>
    </div>
  );
}

export default FilterDropdownSandbox;