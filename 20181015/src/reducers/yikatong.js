import {
    SET_YIKATONG_DATA,
} from '@/constants/actionTypes'

const yikatongStore = (
    state = {
        scenic_spots:[]
    }, 
    action
) => {
    switch(action.type){
        case SET_YIKATONG_DATA:
            return Object.assign({}, state, {scenic_spots: action.payload})
        default:
            return state
    }
}

export default yikatongStore