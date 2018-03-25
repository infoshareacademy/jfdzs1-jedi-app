import { SIGN_IN, SIGN_OUT } from '../actions/types';

const user = (state = null, action) => {
    switch(action.type) {
        case(SIGN_IN):
            return action.user;
        case(SIGN_OUT):
            return null;
        default:
            return state;
    }
};

export default user;