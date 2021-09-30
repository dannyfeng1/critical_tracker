import React from 'react';

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      project_id: this.props.projectId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let { projectId, fetchMembers, getProject } = this.props;
    fetchMembers(projectId)
    getProject(projectId);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit() {
    this.props.addProjectMember(this.state)
  }

  render() {
    let { members, project } = this.props;

    if (project === undefined) {
      return null;
    }

    return (
      <div id="members-container">
        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <button onClick={() => this.props.history.push(`/projects/${project.id}`)}>Stories</button>
          <button onClick={() => this.props.history.push(`/projects/${project.id}/members`)}>Members</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter a username to add to this project's team" value={this.state.username} onChange={this.update("username")}/>
          <button>Add User to Team</button>
        </form>
        <ul>
          {members.map(member => 
            <div key={member.id}>
              <p>{member.username}</p>
              <p>{member.firstName + " " + member.lastName}</p>
              <p>{member.email}</p>
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default Members;