import React from 'react';
import { SearchBar } from 'ui-design-components';
import List from './List';

export default class SearchBarSandbox extends React.Component {
  state = {
    initialItems: [
      "Apples",
      "Broccoli",
      "Chicken",
      "Duck",
      "Eggs",
      "Fish",
      "Granola",
      "Hash Browns"
    ],
    items: [
      "Apples",
      "Broccoli",
      "Chicken",
      "Duck",
      "Eggs",
      "Fish",
      "Granola",
      "Hash Browns"
    ],
  };

  onFilterItems = filteredItems => {
    this.setState({
      ...this.state,
      items: filteredItems,
    });
  }

  render() {
    const { initialItems, items } = this.state;

    if (initialItems) {
      return (
        <div>
          <div style={{ marginBottom: '30px' }} className="row col-sm-12">
            <h4>SearchBar Component</h4>
          </div>

          <div style={{ marginBottom: '30px' }} className="row">
            <div className="col-sm-4 offset-sm-1">
              <SearchBar initialItems={initialItems} onFilter={this.onFilterItems} />
              <List items={items} />
            </div>
          </div>

          <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
            <code>
              <p>{`import { SearchBar } from 'ui-design-components';`}</p>
              <br />
              <br />
              <br />

              <p>{`state = {
                    initialItems: [
                      "Apples",
                      "Broccoli",
                      "Chicken",
                      "Duck",
                      "Eggs",
                      "Fish",
                      "Granola",
                      "Hash Browns"
                    ],
                    items: [
                      "Apples",
                      "Broccoli",
                      "Chicken",
                      "Duck",
                      "Eggs",
                      "Fish",
                      "Granola",
                      "Hash Browns"
                    ],
                  };`}
              </p>

              <br />
              <br />
              <br />
              
              <p>{`onFilterItems = filteredItems => {`}</p>
              <p>&emsp;&emsp;{`this.setState({`}</p>
              <p>&emsp;&emsp;&emsp;&emsp;{`...this.state,`}</p>
              <p>&emsp;&emsp;&emsp;&emsp;{`items: filteredItems,`}</p>
              <p>&emsp;&emsp;{`});`}</p>
              <p>{`}`}</p>

              <br />
              <br />
              <br />

              <p>{`const { initialItems, items } = this.state;`}</p>

              <br />
              <br />
              <br />

              <p>{`<SearchBar initialItems={initialItems} onFilter={this.onFilterItems} />`}</p>

              <br />
              <br />
              <br />

              <p>* The list is a separate component and is not a part of the SearchBar component</p>
            </code>
          </div>
        </div>
      );
    }

    return null;
  }
}