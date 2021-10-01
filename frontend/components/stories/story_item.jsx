import React from 'react';

class StoryItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { id, description, points, priority, storyOwner, storyState, storyType, title} = this.props.story;

    return (
      <div className="story-item">
        <h1>{storyType + ":" + ` ${title}`}</h1>
        <h2>Created by: {storyOwner}</h2>
        <h2>Status: {storyState}</h2>
        <p>{description}</p>
        <p>Prioritize: {priority ? "Yes" : "No" }</p>
      </div>
    )
  }
}

export default StoryItem