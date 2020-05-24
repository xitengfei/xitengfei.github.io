import genReducer from '@/utils/genReducer';
import {ACTION_HANDLERS} from './actions';
import menu from '@/assets/data/menu';
import profile from '@/assets/data/profile';

const getInitState = function() {
    return {
        menu, 
        profile
    };
}
export default genReducer(getInitState(), ACTION_HANDLERS)