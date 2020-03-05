import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session';
import Login from './login';


const mapStateToProps = (state) => ({
  errors: state.errors.session
})

const mapDispatchToProps = (dispatch) => ({
  login: formUser => dispatch(login(formUser)),
  demoLogin: () => dispatch(login({ email: "guest@guest.com", password: "hunter2" })),
  clearErrors: () => dispatch(clearErrors())

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);