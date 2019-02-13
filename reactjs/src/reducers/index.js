import {combineReducers} from 'redux';
import dataProfile from '@/data/profile'
import yikatongStore from '@/reducers/yikatong'

const menuStore = (
    state = {},
    action
) => {
    return state
}

const profileStore = (
    state = dataProfile,
    action
) => {
    return state
}

export default combineReducers({
    menuStore,
    profileStore,
    yikatongStore
})