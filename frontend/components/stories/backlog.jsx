import React from 'react';
import BacklogFormContainer from './forms/back_log_form_container';
import StoryItemContainer from './story_item_container';

class Backlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createForm: false
    };
  }

  render() {
    if (!this.props.presence) {
      return null;
    }

    let { backlog, projectId } = this.props
    return (
      <div className="story-box">
        <BacklogFormContainer projectId={projectId}/>
        <div className="story-list">
          {backlog.map(story => <StoryItemContainer key={story.id} story={story} formType="Backlog"/>)}
        </div>
      </div>
    )
  }
}

export default Backlog;