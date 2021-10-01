import React from 'react';
import StoryItemContainer from './story_item_container';

class Icebox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.presence) {
      return null;
    }

    let { icebox } = this.props
    return (
      <div className="story-box">
        {icebox.map(story => <StoryItemContainer key={story.id} story={story}/>)}
      </div>
    )
  }
}

export default Icebox;