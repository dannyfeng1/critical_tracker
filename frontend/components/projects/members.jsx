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
        <header>
          <h1>Team Members</h1>
          <button onClick={() => this.props.openModal("addMembers")}>Invite People</button>
        </header>
        <ul id="members-list">
          {members.map(member => 
            <div key={member.id}>
              <p>Username: {member.username}</p>
              <p>Name: {member.firstName + " " + member.lastName}</p>
              <p>Email: {member.email}</p>
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default Members;