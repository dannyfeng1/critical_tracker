import React from 'react';
import BacklogContainer from './backlog_container';
import DoneStoriesContainer from './done_stories_container';
import IceboxContainer from './ice_box_container';
import MyWorkContainer from './myWork_container';
import DNDView from '../drag_and_drop/story_view_page'

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

  componentDidUpdate(prevProps) {
    if (prevProps.projects !== this.props.projects) {
      this.props.fetchStories(this.props.projectId);
    }
  }
  render() {
    let { myWork, backlog, icebox, doneStories } = this.state;
    let { currentUser, projectId} = this.props;

    return (
      <div id="stories-page">
        <div id="stories-sidebar">
          <ul>
            <li className={this.state.myWork ? "selected" : ""}onClick={() => this.update("myWork")}>
              <span className="material-icons">inbox</span>
              <p>My Work</p>
            </li>
            <li className={this.state.backlog ? "selected" : ""}onClick={() => this.update("backlog")}>
              <span className="material-icons">view_list</span>
              <p>Backlog</p>
            </li>
            <li className={this.state.icebox ? "selected" : ""}onClick={() => this.update("icebox")}>
              <span className="material-icons">ac_unit</span>
              <p>Icebox</p>
              </li>
            <li className={this.state.doneStories ? "selected" : ""}onClick={() => this.update("doneStories")}>
              <span className="material-icons">done</span>
              <p>Done</p>
            </li>
          </ul>
        </div>
        <DNDView/>
        {/* <div id="stories-containers">
          <MyWorkContainer currentUser={currentUser} projectId={projectId} presence={myWork} />
          <BacklogContainer currentUser={currentUser} projectId={projectId} presence={backlog} />
          <IceboxContainer currentUser={currentUser} projectId={projectId} presence={icebox} />
          <DoneStoriesContainer currentUser={currentUser} projectId={projectId} presence={doneStories} />
        </div> */}

      </div>
    )
  }
}

export default StoriesPage;