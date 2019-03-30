import {combineReducers} from 'redux';
import dataProfile from '@/data/profile'

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
    profileStore
})