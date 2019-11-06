import {combineReducers} from 'redux';
import profile from './profile';
import menu from './menu';

export function createRooteReducer(){
    return combineReducers({
        menu,
        profile
    });
}