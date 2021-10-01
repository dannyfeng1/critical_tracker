import React from 'react';
import StoryItemContainer from './story_item_container';

class Backlog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.presence) {
      return null;
    }

    let { backlog } = this.props
    return (
      <div className="story-box">
        <h1>Backlog</h1>
        {backlog.map(story => <StoryItemContainer key={story.id} story={story}/>)}
      </div>
    )
  }
}

export default Backlog;