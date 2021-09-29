import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { type } = this.props;
    console.log(this.props);
    let component = null;
    let button = (
      <button onClick={() => this.props.closeModal()}>Close</button>
    )
    switch (type) {
      case "createProject":ac
        component = <h1>Modal Testing</h1>
      default:
        break;
    }

    return (
      <div id="modal">
        {type ? button : null }
        {component}
      </div>
    )
  }
}

export default Modal;