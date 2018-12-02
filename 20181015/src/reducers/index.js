import {combineReducers} from 'redux';

let yikatongStore = (
    state = {
        items:['a', 'b'],
        areas:['昌平', '丰台']
    }, 
    action
) => {
    return state
}

export default combineReducers({
    yikatongStore
})