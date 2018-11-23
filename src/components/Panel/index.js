import React from 'react';
import style from './index.scss';
import classnames from 'classnames';

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: props.collapsed || false,
    };
  }

  onCollapseClick = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }

  renderHeader = () => {
    const { title, isCollapsible, } = this.props;
    const { isCollapsed, } = this.state;
    const collapseIconClass = isCollapsed ? 'fa fa-plus' : 'fa fa-minus';

    const collapseButton = <p className="text-right" style={{ margin: 0 }}>
      <button
        className={style.collapseBtn}
        onClick={ () => this.onCollapseClick() }>
        <i className={collapseIconClass}></i>
      </button>
    </p>;

    return (
      <div className="card-header" style={{ background: '#335777' }} >
        <div className="row">
          <div className="col-sm-10">
            { title || '' }
          </div>
          <div className="col-sm-2">
            { isCollapsible ? collapseButton : null }
          </div>
        </div>
      </div>
    );
  }

  renderBody = () => {
    const { children } = this.props;
    const { isCollapsed } = this.state;
    if (isCollapsed) {
      return null;
    }

    return (
      <div className="card-body">{ children || null }</div>
    );
  }

  render() {
    return (
      <div className="card">
        { this.renderHeader() }
        { this.renderBody() }
      </div>
    );
  }
}

export default Panel;