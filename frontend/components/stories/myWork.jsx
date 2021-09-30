import React from 'react';

class MyWork extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.presence) {
      return null;
    }

    return (
      <div className="story-box">
        <h1>List of all my work</h1>
      </div>
    )
  }
}

export default MyWork;