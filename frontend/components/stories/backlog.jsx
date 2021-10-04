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

  componentDidUpdate(prevProps) {
    if (prevProps.backlog !== this.props.backlog) {
      this.setState({createForm: false});
    }
  }

  render() {
    if (!this.props.presence) {
      return null;
    }

    let { backlog, projectId } = this.props
    return (
      <div className="story-box">
        <div className="story-container-header">
          <h1>Backlog</h1>
          {this.state.createForm ? null : <button onClick={() => this.setState({createForm: true})}>Create Story</button>}
          {this.state.createForm ? <button onClick={() => this.setState({createForm: false})}>Cancel</button> : null }
        </div>
        {this.state.createForm ? <BacklogFormContainer projectId={projectId}/> : null}
        <div className="story-list">
          {backlog.map(story => <StoryItemContainer key={story.id} story={story} formType="Backlog"/>)}
        </div>
      </div>
    )
  }
}

export default Backlog;