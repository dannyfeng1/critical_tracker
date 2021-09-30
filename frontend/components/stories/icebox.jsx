import React from 'react';

class Icebox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.presence) {
      return null;
    }

    return (
      <div className="story-box">
        <h1>List of stories iced</h1>
      </div>
    )
  }
}

export default Icebox;