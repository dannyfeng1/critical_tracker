import React from 'react';
import ProjectItem from './project_item';

class MyProjects extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    let { projects, openModal} = this.props
    return (
      <div id="my-projects">
        <header>
          <h1>My Projects | {projects.length}</h1>
          <button onClick={() => openModal("createProject")}>Create Project</button>
        </header>
        <ul>
          {projects.map(project => <ProjectItem project={project} key={project.id} />)}
        </ul>
      </div>
    )
  }
}

export default MyProjects;