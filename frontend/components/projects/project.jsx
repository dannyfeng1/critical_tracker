import React from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { projectId, fetchMembers, getProject } = this.props;
    getProject(projectId);
    fetchMembers(projectId)
  }

  render() {
    let { members, project } = this.props;

    if (project === undefined) {
      return null;
    }

    return (
      <div id="project-container">
        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <button onClick={() => this.props.history.push(`/projects/${project.id}`)}>Stories</button>
          <button onClick={() => this.props.history.push(`/projects/${project.id}/members`)}>Members</button>
        </div>
      </div>
    )
  }
}

export default Project;