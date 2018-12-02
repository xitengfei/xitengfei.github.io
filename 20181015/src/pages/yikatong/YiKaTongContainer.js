import {connect} from 'react-redux'
import YiKaTong from './YiKaTong'
import {
    fetchYiKaTongData
} from '@/actions/yikatong'

const mapStateToProps = (state, ownProps) => {
    console.log('state', state)
    return {
        scenic_spots: state.yikatongStore.scenic_spots
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    dispatch(fetchYiKaTongData())
    return {}
}

const YiKaTongContainer = connect(mapStateToProps, mapDispatchToProps)(YiKaTong)

export default YiKaTongContainer