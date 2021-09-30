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
      .then(() => this.setState({username: ""}));
  }

  componentDidMount() {
    this.props.getProject(this.props.projectId);
  }

  componentWillUnmount() {
    this.props.clearMessages();
    this.props.closeModal();
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  render() {
    let { project, messages } = this.props;
    if (!project) return null;
    let color = null;
    
    if(messages[0] === 'User does not exist' || messages[0] === 'User is already in this project.') {
      color = "red";
    } else {
      color = "green";
    }

    return (
      <div id="add-members-container">
        <form>
          <h1>Invite members to {project.title}!</h1>
          <input type="text" placeholder="Enter a username to add to this project's team" value={this.state.username} onChange={this.update("username")}/>
          {messages.map(message => <p style={{color: color}}>{message}</p>)}
          <div className="buttons-list">
            <button className="submit" onClick={this.handleSubmit} >Add to Team</button>
            <button onClick={this.props.closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
  
}

export default AddMembersForm;