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

    let deleteConfirmation = <div id="delete-confirm"></div>;
    if (this.state.deleteProject) {
      deleteConfirmation = (
        <div id="delete-confirm">
          <p>Are you sure you want to delete this project?</p>
          <button className="delete"onClick={this.handleDelete}>Yes</button>
          <button className="cancel"onClick={() => this.setState({deleteProject: false})}>No</button>
        </div>
      )
    }

    let editButtons = null;
    if (project.projectOwnerId == currentUser) {
      editButtons = (
        <div className="edit-buttons">
        <Link to={`/projects/${project.id}/information/edit`}>
          <button className="edit">Edit</button>
        </Link>
        <button onClick={() => this.setState({deleteProject: true})}>Delete</button>
      </div>
      )
    }

      return (
        <div id="project-details">
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
          <div id="project-info">
            <h2>{project.title}</h2>
            <h3>Description: {project.description}</h3>
            {editButtons}
            {deleteConfirmation}
          </div>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSettings);