import React from 'react';
import filter from 'lodash/filter';
import isObject from 'lodash/isObject';
import unionBy from 'lodash/unionBy';
import includes from 'lodash/includes';

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
            const filteredKeyword = searchKeyword.trim().replace('\\', '');

            // loop properties of objects based on first element of the list
            Object.keys(initialItems[0]).map(key => {
              
              // Search for rows matching the searchKeyword
              const filteredArray = filter(initialItems, o => {
                const column = o[key];
                if (Array.isArray(column)) {
                  const columnList = column.filter(item  => {
                    return includes(`${item}`.toLowerCase(), filteredKeyword.toLowerCase());
                  });

                  return columnList.length > 0;
                }

                return includes(`${column}`.toLowerCase(), filteredKeyword.toLowerCase());
              });

              // finally, set the results
              const placeholderArray = filterResults.concat(filteredArray);
              filterResults = placeholderArray;
            });


            // eliminate any duplicates by id
            updatedObjectList = unionBy(filterResults, id);

            if (onFilter) {
              onFilter(updatedObjectList);
            }
          }

          return;
        }

        const updatedList = initialItems.filter(item  => {
          return includes(`${item}`.toLowerCase(), searchKeyword.toLowerCase());
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