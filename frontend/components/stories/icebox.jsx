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
        <IceboxFormContainer projectId={projectId}/> 
        <div className="story-list">
          {icebox.map(story => <StoryItemContainer key={story.id} story={story} formType="Icebox"/>)}
        </div>
      </div>
    )
  }
}

export default Icebox;