import React from 'react';
import IceboxFormContainer from './forms/icebox_form_container';
import StoryItemContainer from './story_item_container';

class Icebox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createForm: false
    };
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.icebox !== this.props.icebox) {
  //     this.setState({createForm: false});
  //   }
  // }

  render() {
    if (!this.props.presence) {
      return null;
    }

    let { icebox, projectId } = this.props
    return (
      <div className="story-box">
        <div className="story-container-header">
          <h1>Icebox</h1>
          {this.state.createForm ? null : <button onClick={() => this.setState({createForm: true})}>Create Story</button>}
          {this.state.createForm ? <button onClick={() => this.setState({createForm: false})}>Cancel</button> : null }
        </div>
        {this.state.createForm ? <IceboxFormContainer projectId={projectId}/> : null}
        <div className="story-list">
          {icebox.map(story => <StoryItemContainer key={story.id} story={story} formType="Icebox"/>)}
        </div>
      </div>
    )
  }
}

export default Icebox;