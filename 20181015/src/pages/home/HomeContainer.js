import {connect} from 'react-redux'
import Home from './Home'

const mapStateToProps = (state, ownProps) => {
    console.log('kkk', state)
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