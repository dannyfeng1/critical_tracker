import React from 'react';
import MyWorkFormcontainer from './forms/my_work_form_container';
import StoryItemContainer from './story_item_container';

class MyWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createForm: false
    }
  }

  render() {
    if (!this.props.presence) {
      return null;
    }
    console.log(this.props)

    let { myWork, projectId } = this.props
    return (
      <div className="story-box">
        <div>
          <h1>My Work</h1>
          <button onClick={() => this.setState({createForm: true})}>Create Story</button>
          {this.state.createForm ? <MyWorkFormcontainer projectId={projectId}/> : null}
          {this.state.createForm ? <button onClick={() => this.setState({createForm: false})}>Cancel</button> : null }
        </div>
        {myWork.map(story => <StoryItemContainer key={story.id} story={story}/>)}
      </div>
    )
  }
}

export default MyWork;