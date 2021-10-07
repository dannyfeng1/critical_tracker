import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getProject, updateProject, deleteProject } from "../../actions/projects";

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId],
  projectId: ownProps.match.params.projectId,
  currentUser: state.session.currentUser,
  errors: state.ui.errors.projectErrors
})

const mapDispatchToProps = dispatch => ({
  getProject: (projectId) => dispatch(getProject(projectId)),
  deleteProject: (projectId) => dispatch(deleteProject(projectId)),
  updateProject: (project) => dispatch(updateProject(project))
})

class EditProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteProject: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getProject(this.props.projectId).then(action => this.setState(action.project))
  }

  handleDelete(e) {
    e.preventDefault()
    let { projectId, deleteProject} = this.props;
    deleteProject(projectId);
    this.props.history.push("/dashboard")
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit() {
    this.props.updateProject(this.state)
    .then(() => this.props.history.push(`/projects/${this.props.projectId}/information`))
  }

  render() {
    let { title, description } = this.state;
    if (!this.props.project) return null;

    let deleteConfirmation = <div id="delete-confirm"></div>
    if (this.state.deleteProject) {
      deleteConfirmation = (
        <div id="delete-confirm">
          <p>Are you sure you want to delete this project?</p>
          <button className="delete" onClick={this.handleDelete}>Yes</button>
          <button onClick={() => this.setState({deleteProject: false})}>No</button>
        </div>
      )
    }

    if (this.props.currentUser != this.props.project.projectOwnerId) {
      return (
        <Redirect to={`/projects/${this.props.projectId}/information`} />
      )
    } else {
      return (
        <div id="edit-project-form">
          <div className="project-header">
            <h1 className="project-title">{this.props.project.title}</h1>
            <button onClick={() => this.props.history.push(`/projects/${this.props.projectId}`)}>Stories</button>
            <button onClick={() => this.props.history.push(`/projects/${this.props.projectId}/members`)}>Members</button>
            <button onClick={() => this.props.history.push(`/projects/${this.props.projectId}/information`)}>Information</button>
          </div>
  
          
          <form> 
            <h2>Edit Project Details</h2>
            <label>Title:
              <input type="text" value={title} onChange={this.update("title")}/>
            </label>
            <label>Description:
              <textarea value={description} onChange={this.update("description")} cols="30" rows="10"></textarea>
            </label>
            <div className="edit-project-buttons">
              <button className="edit" onClick={this.handleSubmit}>Update</button>
              <button className="cancel" onClick={() => this.props.history.push(`/projects/${this.props.projectId}/information`)}>Cancel</button>
              <button className="delete" onClick={() => this.setState({deleteProject: true})}>Delete</button>
            </div>
            {this.props.errors.map(error => <li className="errors">{error}</li>) }
            {deleteConfirmation}
          </form>
        </div>
      )
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm);