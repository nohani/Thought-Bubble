import { connect } from 'react-redux';
import { createNewUser, login, clearError } from '../../actions/session';
import Signup from './signup';


const mapStateToProps = (state) => ({
  errors: state.errors.session
})


const mapDispatchToProps = (dispatch) => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  demoLogin: () => dispatch(login({email: "guest@guest.com", password: "hunter2"})),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);