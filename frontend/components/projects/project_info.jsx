import React from "react";
import { connect } from "react-redux";
import { getProject, deleteProject } from "../../actions/projects"
import { Link } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId],
  projectId: ownProps.match.params.projectId,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  deleteProject: (projectId) => dispatch(deleteProject(projectId)),
  getProject: (projectId) => dispatch(getProject(projectId))
})

class ProjectSettings extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      deleteProject: false
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault()
    let { projectId, deleteProject} = this.props;
    deleteProject(projectId);
    this.props.history.push("/dashboard")
  }

  componentDidMount() {
    this.props.getProject(this.props.projectId)
  }


  render() {
    let { project, currentUser} = this.props;
    
    if (!project) return null;

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
        <div id="project-details">
          <div className="project-header">
            <h1 className="project-title">{project.title}</h1>
            <button onClick={() => this.props.history.push(`/projects/${project.id}`)}>Stories</button>
            <button onClick={() => this.props.history.push(`/projects/${project.id}/members`)}>Members</button>
            <button onClick={() => this.props.history.push(`/projects/${project.id}/information`)}>Information</button>
          </div>
          <h1>Title: {project.title}</h1>
          <h2>Description: {project.description}</h2>
          <Link to={`/projects/${project.id}/information/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => this.setState({deleteProject: true})}>Delete</button>
          {deleteConfirmation}
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSettings);