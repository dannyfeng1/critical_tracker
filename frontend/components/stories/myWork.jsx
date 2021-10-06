import React from 'react';
import MyWorkFormcontainer from './forms/my_work_form_container';
import StoryItemContainer from './story_item_container';

class MyWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createForm: false
    };
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.myWork !== this.props.myWork) {
  //     this.setState({createForm: false});
  //   }
  // }

  render() {
    if (!this.props.presence) {
      return null;
    }

    let { myWork, projectId } = this.props
    return (
      <div className="story-box">
        <MyWorkFormcontainer projectId={projectId}/> 
        <div className="story-list">
          {myWork.map(story => <StoryItemContainer key={story.id} story={story} formType="MyWork"/>)}
        </div>
      </div>
    )
  }
}

export default MyWork;