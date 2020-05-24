import {connect} from 'react-redux'
import Home from './Home'

const mapStateToProps = (state) => {
    const {menu, profile} = state.homeStore;
    return {menu, profile};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);