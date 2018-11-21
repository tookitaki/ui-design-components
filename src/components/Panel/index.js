import React from 'react';

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: props.isCollapsed || false,
    };
  }

  render() {
    const { title, children, } = this.props;
    return (
      <div className="card">
        <div className="card-header" style={{ background: '#335777' }}>{ title || '' }</div>
        <div className="card-body">{ children || null }</div>
      </div>
    );
  }
}

export default Panel;