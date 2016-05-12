import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../IndexPage';
import {
  doArpo,
} from '../../ducks/arpo';

export default connect(
  state => ({
    arpo: state.todo.get('arpo'),
    seats: state.todo.get('seats'),
  }),
  dispatch => bindActionCreators({
    doArpo
  }, dispatch)
)(Wrapped);
