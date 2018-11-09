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
        </div>
      );
    }

    return null;
  }
}