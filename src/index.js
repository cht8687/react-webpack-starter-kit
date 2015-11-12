import React, { Component, PropTypes } from 'react';

class App extends Component {
  static propTypes = {
    data: PropTypes.string.isRequired
  };

  render() {
  	const { data } = this.props;
    return (
      <div>{data}</div>
    );
  }
}


React.render(<App data="Hello react with hot-reload"/>, document.body);
