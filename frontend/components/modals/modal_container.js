import { connect } from "react-redux";
import { closeModal } from "../../actions/modal";
import Modal from "./modal";

const mapStateToProps = state => ({
  type: state.ui.modals
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps,mapDispatchToProps)(Modal);