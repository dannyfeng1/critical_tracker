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
  getProject: (projectId) => dispatch(getProject(projectId))
})

class EditProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
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

  render() {
    let { title, description } = this.state;
    if (!this.props.project) return null;
    
    return (
      <div id="edit-project-form">
        <div className="project-header">
            <h1 className="project-title">{this.props.project.title}</h1>
            <button onClick={() => this.props.history.push(`/projects/${project.id}`)}>Stories</button>
            <button onClick={() => this.props.history.push(`/projects/${project.id}/members`)}>Members</button>
            <button onClick={() => this.props.history.push(`/projects/${project.id}/information`)}>Information</button>
        </div>
        <div>{title + description}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm);