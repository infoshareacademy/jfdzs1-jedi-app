import { SHOW_ERROR, HIDE_ERROR } from '../actions/types';

const error = (state = null, action) => {
    switch(action.type) {
        case(SHOW_ERROR):
            return action.error;
        case(HIDE_ERROR):
            return null;
        default:
            return state;
    }
};

export default error;