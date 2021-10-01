import React from 'react';
import BacklogContainer from './backlog_container';
import DoneStoriesContainer from './done_stories_container';
import IceboxContainer from './ice_box_container';
import MyWorkContainer from './myWork_container';

class StoriesPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      myWork: true,
      backlog: true,
      icebox: true,
      doneStories: false
    };
  }

  update(container) {
    let flag = null;
    this.state[container] === true? flag = false : flag = true;
    this.setState({[container]: flag})
  }

  componentDidMount() {
    this.props.fetchStories(this.props.projectId);
  }
  render() {
    let { myWork, backlog, icebox, doneStories } = this.state;
    let { currentUser, projectId} = this.props;

    return (
      <div id="stories-page">
        <div id="stories-sidebar">
          <ul>
            <li onClick={() => this.update("myWork")}>My work</li>
            <li onClick={() => this.update("backlog")}>Backlog</li>
            <li onClick={() => this.update("icebox")}>Icebox</li>
            <li onClick={() => this.update("doneStories")}>Done</li>
          </ul>
        </div>
        <div id="stories-containers">
          <MyWorkContainer currentUser={currentUser} projectId={projectId} presence={myWork} />
          <BacklogContainer currentUser={currentUser} projectId={projectId} presence={backlog} />
          <IceboxContainer currentUser={currentUser} projectId={projectId} presence={icebox} />
          <DoneStoriesContainer currentUser={currentUser} projectId={projectId} presence={doneStories} />
        </div>
      </div>
    )
  }
}

export default StoriesPage;