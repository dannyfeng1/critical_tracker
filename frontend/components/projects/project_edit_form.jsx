import React from "react";
import { connect } from "react-redux";
import { getProject, updateProject, deleteProject } from "../../actions/projects";
import { Link } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId],
  projectId: ownProps.match.params.projectId,
  currentUser: state.session.currentUser
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

    let deleteConfirmation = null;
    if (this.state.deleteProject) {
      deleteConfirmation = (
        <div id="delete-confirm">
          <p>Are you sure you want to delete this project?</p>
          <button onClick={this.handleDelete}>Yes</button>
          <button onClick={() => this.setState({deleteProject: false})}>No</button>
        </div>
      )
    }

    return (
      <div id="edit-project-form">
        <div className="project-header">
            <h1 className="project-title">{this.props.project.title}</h1>
            <button onClick={() => this.props.history.push(`/projects/${project.id}`)}>Stories</button>
            <button onClick={() => this.props.history.push(`/projects/${project.id}/members`)}>Members</button>
            <button onClick={() => this.props.history.push(`/projects/${project.id}/information`)}>Information</button>
        </div>
        <form>
          <label>Title:
            <input type="text" value={title} onChange={this.update("title")}/>
          </label>
          <label>Description:
            <textarea value={description} onChange={this.update("description")} cols="30" rows="10"></textarea>
          </label>
          <button onClick={this.handleSubmit}>Save and Update</button>
          <button onClick={() => this.props.history.push(`/projects/${this.props.projectId}/information`)}>Cancel</button>
          <button onClick={() => this.setState({deleteProject: true})}>Delete</button>
          {deleteConfirmation}
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm);