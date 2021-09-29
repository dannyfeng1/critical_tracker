import React from 'react';
class CreateProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      project_owner_id: this.props.currentUser
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.closeModal()
  }

  render() {
    let { title, description } = this.state;

    return (
      <div id="create-project-form">
        <h1>Create a new project</h1>
        <form>
          <input type="text" placeholder="Title" value={title} onChange={this.update("title")} />
          <textarea placeholder="Brief Description" value={description} onChange={this.update("description")} id="" cols="30" rows="10"></textarea>
          <button onClick={() => this.props.closeModal()}>Cancel</button>
          <button onClick={this.handleSubmit}>Create</button>
        </form>
      </div>
    )
  }
}

export default CreateProjectForm;