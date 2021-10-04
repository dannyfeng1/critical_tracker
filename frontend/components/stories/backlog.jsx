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
        <h1>Backlog</h1>
        {this.state.createForm ? null : <button onClick={() => this.setState({createForm: true})}>Create Story</button>}
        {this.state.createForm ? <BacklogFormContainer projectId={projectId}/> : null}
        {this.state.createForm ? <button onClick={() => this.setState({createForm: false})}>Cancel</button> : null }
        {backlog.map(story => <StoryItemContainer key={story.id} story={story} formType="Backlog"/>)}
      </div>
    )
  }
}

export default Backlog;