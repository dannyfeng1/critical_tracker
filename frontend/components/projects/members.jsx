import React from 'react';
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";


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

    if (!this.props.currentUser) {
      return (<Redirect to="/dashboard" />)
    } else return (
      <div id="members-container">
        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
            <Link to={`/projects/${project.id}`}>
              <button>Stories</button>
            </Link>
            <Link to={`/projects/${project.id}/members`}>
              <button>Members</button>
            </Link>          
            <Link to={`/projects/${project.id}/information`}>
              <button>Information</button>
            </Link>
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