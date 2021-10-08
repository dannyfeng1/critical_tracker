import React from 'react';
import { Redirect } from 'react-router';
import StoriesPageContainer from '../stories/stories_page_container';
import { Link } from "react-router-dom";


class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { projectId, fetchMembers, getProject } = this.props;
    getProject(projectId);
    fetchMembers(projectId)
  }

  render() {
    let { project } = this.props;

    if (project === undefined) {
      return (
        <Link id="unaccessible" to="/">
          <h1 >This project does not have exist or you do not have access</h1>
          <div>Click here to go back to the homepage</div>
        </Link>
      
      )
    }

    if (!this.props.currentUser) {
      return <Redirect to="/dashboard" />
    } else return (
      <div id="project-container">
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
        <StoriesPageContainer project={project} />
      </div>
    )
  }
}

export default Project;