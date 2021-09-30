import React from 'react';
import Backlog from './backlog';
import DoneStories from './done_stories';
import Icebox from './icebox';
import MyWork from './myWork';

class StoriesPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      myWork: true,
      backlog: true,
      icebox: false,
      doneStories: false
    };
  }

  update(container) {
    let flag = null;
    this.state[container] === true? flag = false : flag = true;
    this.setState({[container]: flag})
  }

  render() {
    let { myWork, backlog, icebox, doneStories } = this.state;
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
          <MyWork presence={myWork} />
          <Backlog presence={backlog} />
          <Icebox presence={icebox} />
          <DoneStories presence={doneStories} />
        </div>
      </div>
    )
  }
}

export default StoriesPage;