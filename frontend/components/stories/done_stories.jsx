import React from 'react';

class DoneStories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.presence) {
      return null;
    }

    return (
      <div className="story-box">
        <h1>List of finished stories</h1>
      </div>
    )
  }
}

export default DoneStories;