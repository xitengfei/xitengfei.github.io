import * as actionTypes from '@/constants/actionTypes'

const yikatongStore = (
    state = {
        scenicSpots:[],
        areas:[],
    }, 
    action
) => {
    switch(action.type){
        case actionTypes.SET_YIKATONG_DATA:
            return Object.assign({}, state, {scenicSpots: action.payload})
        case actionTypes.SET_YIKATONG_AREAS:
            return Object.assign({}, state, {areas: action.payload})
        default:
            return state
    }
}

export default yikatongStore