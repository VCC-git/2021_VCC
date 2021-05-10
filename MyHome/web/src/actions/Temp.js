export const SET_TEMPPOWER = 'SET_TEMPPOWER';
export const SET_TEMPINCREASE = 'SET_TEMPINCREASE';
export const SET_TEMPDECREASE = 'SET_TEMPDECREASE';
export const SET_TEMPVALUE = 'SET_TEMPVALUE';

export const setTempPower = (on) => {
    return {
        type: SET_TEMPPOWER,
        on
    }
}

export const setTempIncrease = () => {
    return {
        type: SET_TEMPINCREASE
    }
}

export const setTempDecrease = () => {
    return {
        type: SET_TEMPDECREASE
    }
}

export const setTempValue = (temp) => {
    return {
        type: SET_TEMPVALUE,
        temp
    }
}