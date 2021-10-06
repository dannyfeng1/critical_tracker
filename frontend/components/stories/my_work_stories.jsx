import React, { useState } from 'react';
import StoryItemContainer from './story_item_container';

class MyWorkStories extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    // const [stories, setStories] = useState(this.props.myWork);
    
    return (
      <div id="myWork-stories">
        {stories
          .sort((a, b) => a.id - b.id)
          .map(story => (
            <StoryItemContainer 
              key={story.id}
              storyNumber={story.id}
            />
          ))
        }
      </div>
    )
  }
}

export default MyWorkStories;