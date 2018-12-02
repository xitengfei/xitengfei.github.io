import axios from 'axios'

import {
    FETCH_YIKATONG_DATA,
    SET_YIKATONG_DATA,
} from '@/constants/actionTypes'

export function fetchYiKaTongData(){
    return async (dispatch) => {
        dispatch({type: FETCH_YIKATONG_DATA})

        try{
            const response = await axios.get(`/json/test.json`);
            dispatch({type: SET_YIKATONG_DATA, payload: response.data})
        } catch(err) {
            console.log(err)
        }
    }
}