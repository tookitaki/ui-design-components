import React from 'react';
import filter from 'lodash/filter';
import isObject from 'lodash/isObject';
import unionBy from 'lodash/unionBy';

export default class FilteredList extends React.Component {
  constructor(props) {
    super(props);
  }

  filterList = e => {
    const { initialItems, id } = this.props;
    const { onFilter } = this.props;
    const searchKeyword = e.target.value;

    // if searchKeyword is available, proceed to filter
    if (searchKeyword && searchKeyword.trim() !== '') {
      // check if there are items to begin with
      if (initialItems && Array.isArray(initialItems) && initialItems.length > 0) {
        // Filter items according to SearchBar input
        let updatedObjectList = [];

        // check if object and unique identifier is provided
        if (isObject(initialItems[0])) {
          if (id) {
            let filterResults = [];
            Object.keys(initialItems[0]).map(key => {
              const filteredArray = filter(initialItems, [key, searchKeyword]);
              const placeholderArray = filterResults.concat(filteredArray);
              filterResults = placeholderArray;
            });

            updatedObjectList = unionBy(filterResults, id);

            if (onFilter) {
              onFilter(updatedObjectList);
            }
          }

          return;
        }

        const updatedList = initialItems.filter(item  => {
          return item.toLowerCase().search(
            searchKeyword.toLowerCase()) !== -1;
        });
  
        if (onFilter) {
          onFilter(updatedList);
        }
      }

      return;
    }

    // if not, return original items
    if (onFilter) {
      onFilter(initialItems);
    }
    return;
  }

  render() {
    return (
      <div className="filter-list">
          <fieldset className="form-group">
          <input type="text" className="form-control form-control-md" placeholder="Search" onChange={this.filterList}/>
          </fieldset>
      </div>
    );
  }
}