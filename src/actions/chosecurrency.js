import {CHOSE_CURRENCY} from './types'

const choseCurrency = Currency => ({
    type: CHOSE_CURRENCY,
    Currency: true
});

export const showCurrency = (currency) => {
    return (dispatch) => {
        dispatch(choseCurrency(currency));
        {console.log("dupa")}

    }
};