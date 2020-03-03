import { connect } from 'react-redux';
import { createNewUser, login } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = (dispatch) => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  demoLogin: () => dispatch(login({email: "guest@guest.com", password: "hunter2"}))
});

export default connect(null, mapDispatchToProps)(Signup);