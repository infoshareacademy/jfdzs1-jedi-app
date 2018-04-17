import { connect } from 'react-redux'
import ErrorComponent from '../components/login.components/error'

const mapStateToProps = state => ({
    error: state.error
});

export default connect(
    mapStateToProps,
    undefined
)(ErrorComponent);