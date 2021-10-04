import React from 'react';

class StoryItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { id, description, points, priority, author, storyState, storyType, title, assignedUser} = this.props.story;

    let assignment = (<p>Assigned To: N/A</p>);
    if (assignedUser) {
      assignment = (
        <p>Assigned To: {assignedUser}</p>
      )
    }

    let assignmentButton = null;
    if (!assignedUser) {
      if (this.props.formType === "Icebox") {
        assignmentButton = (
          <button onClick={(id) =>this.props.iceboxAssign(id)}>Accept</button>
        )
      } else if (this.props.formType === "Backlog") {
        assignmentButton = (
          <button onClick={(id) =>this.props.backlogAssign(id)}>Accept</button>
        )
      }
    }

    return (
      <div className="story-item-container">
        <div className="story-item">
          <h1>{storyType + ":" + ` ${title}`}</h1>
          <h2>Created by: {author}</h2>
          <h2>Status: {storyState}</h2>
          {this.props.formType !== "MyWork" ? assignment : null}
          <p>{description}</p>
        </div>
        {assignmentButton}
      </div>
    )
  }
}

export default StoryItem