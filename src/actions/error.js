import {SHOW_ERROR, HIDE_ERROR} from "./types";

const showError= error=>({
    type: SHOW_ERROR,
    error
});

const hideError= ()=>({
    type: HIDE_ERROR
});

export const presentError = (error) => {

    return (dispatch) => {
        dispatch(showError(error));
        setTimeout(()=>{dispatch(hideError())},2000)
    }
};