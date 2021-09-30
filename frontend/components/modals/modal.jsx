import React from 'react';
import { Route } from 'react-router';
import AddMembersFormContainer from './add_members_container';
import CreateProjectFormContainer from './create_project_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { type, closeModal } = this.props;
    let component = null;
    switch (type) {
      case "addMembers":
        component = <Route path="/projects/:projectId/members" component={AddMembersFormContainer}/>
        break;
      case "createProject":
        component = <CreateProjectFormContainer closeModal={closeModal} />
        break;
      default:
        break;
    }
          
    return (
      <div id="modal">
        {component}
      </div>
    )
  }
}

export default Modal;