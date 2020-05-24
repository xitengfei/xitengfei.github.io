import genReducer from '@/utils/genReducer';
import Home from './type';
import {ACTION_HANDLERS} from './actions';
import menu from '@/data/menu';
import profile from '@/data/profile';

const getInitState = function() {
    return {
        menu, 
        profile
    };
}
export default genReducer(getInitState(), ACTION_HANDLERS)