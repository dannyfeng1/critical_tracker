import React from 'react';
import CreateProjectFormContainer from './create_project_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { type, closeModal } = this.props;
    let component = null;
    
    switch (type) {
      case "createProject":
        component = <CreateProjectFormContainer closeModal={closeModal} />
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