import React from 'react';

class Backlog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.presence) {
      return null;
    }

    return (
      <div className="story-box">
        <h1>List of the backlog</h1>
      </div>
    )
  }
}

export default Backlog;