import React from 'react';
import StoryItemContainer from './story_item_container';

class DoneStories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.presence) {
      return null;
    }

    let { finished } = this.props
    return (
      <div className="story-box">
        {finished.map(story => <StoryItemContainer key={story.id} story={story}/>)}
      </div>
    )
  }
}

export default DoneStories;