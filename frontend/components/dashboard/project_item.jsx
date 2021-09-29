import React from 'react';

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createProject: false,
      editProject: false
    }
  }

  render() {
    let { project } = this.props;

    return (
      <div className="project-item">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    )
  }
}

export default ProjectItem;