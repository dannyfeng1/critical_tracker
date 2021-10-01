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

  componentWillUnmount() {
    this.props.clearErrors();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.state)
      .then(() => this.props.closeModal())
  }

  render() {
    let { title, description } = this.state;

    return (
      <div id="create-project-container">
        <form>
          <h1>Create a new project</h1>
          <input type="text" placeholder="Project Name" value={title} onChange={this.update("title")} />
          <textarea placeholder="Brief Description" value={description} onChange={this.update("description")} id="" cols="30" rows="40"></textarea>
          <div className="buttons-list">
            <button className="submit" onClick={this.handleSubmit}>Create</button>
            <button onClick={() => this.props.closeModal()}>Cancel</button>
          </div>
          {this.props.errors.map(error => <p>{error}</p>)}
        </form>
      </div>
    )
  }
}

export default CreateProjectForm;