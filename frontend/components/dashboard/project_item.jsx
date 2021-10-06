import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={`/projects/${project.id}`}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </Link>
        <p className="project-buttons">
          <Link to={`/projects/${project.id}/members`} >
            <span className="material-icons">groups</span>
          </Link>         
           <Link to={`/projects/${project.id}/information`} >
            <span className="material-icons">settings</span>
          </Link>
        </p>
      </div>
    )
  }
}

export default ProjectItem;