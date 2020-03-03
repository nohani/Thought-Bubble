import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Splash from './splash';


const mapDispatchToProps = (dispatch) => ({
  demoLogin: () => dispatch(login({ email: "guest@guest.com", password: "hunter2" }))
});

export default connect(null, mapDispatchToProps)(Splash);