import {connect} from 'react-redux'
import Home from './Home'

const mapStateToProps = (state, ownProps) => {
    return {
        menus: state.menuStore.menus,
        skills: state.profileStore.skills
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer