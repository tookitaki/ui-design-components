import React from 'react';

export default class FilteredList extends React.Component {
  constructor(props) {
    super(props);
  }

  filterList = e => {
    const { initialItems } = this.props;
    const { onFilter } = this.props;
    const searchKeyword = e.target.value;

    // if searchKeyword is available, proceed to filter
    if (searchKeyword && searchKeyword.trim() !== '') {
      // check if there are items to begin with
      if (initialItems && Array.isArray(initialItems) && initialItems.length > 0) {
        // Filter items according to SearchBar input
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