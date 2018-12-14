import axios from 'axios'
import * as actionTypes from '@/constants/actionTypes'

const mergeData = (lists) => {
    let items = []
    lists.map((list)=>{
        list.items.map((item)=>{
            item.area_name = list.area_name
            items.push(item)
        })
    })
    return items
}

export function fetchYiKaTongData(){
    return async (dispatch) => {
        dispatch({type: actionTypes.FETCH_YIKATONG_DATA})

        try{
            const response = await axios.get(`/json/test.json`);

            const scenicSpots = mergeData(response.data)
            const areas = response.data.map(item => item.area_name)
            
            dispatch({type: actionTypes.SET_YIKATONG_DATA, payload: scenicSpots})
            dispatch({type: actionTypes.SET_YIKATONG_AREAS, payload: areas})
        } catch(err) {
            console.log(err)
        }
    }
}