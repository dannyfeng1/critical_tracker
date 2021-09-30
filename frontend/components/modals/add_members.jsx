import React from 'react';

class AddMembersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      project_id: this.props.projectId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addProjectMember(this.state)
    
  }

  componentDidMount() {
    this.props.getProject(this.props.projectId);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  render() {
    let { project } = this.props;
    if (!project) return null;

    return (
      <div id="add-members-form">
        <h1>Invite members to {project.title}!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter a username to add to this project's team" value={this.state.username} onChange={this.update("username")}/>
          <button onClick={this.props.closeModal}>Cancel</button>
          <button>Add User to Team</button>
        </form>
      </div>
    )
  }
  
}

export default AddMembersForm;