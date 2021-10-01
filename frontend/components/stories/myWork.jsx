import React from 'react';
import StoryItemContainer from './story_item_container';

class MyWork extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.presence) {
      return null;
    }
    console.log(this.props)

    let { myWork } = this.props
    return (
      <div className="story-box">
        <h1>My Work</h1>
        {myWork.map(story => <StoryItemContainer key={story.id} story={story}/>)}
      </div>
    )
  }
}

export default MyWork;