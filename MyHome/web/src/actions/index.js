export const SET_OPTIONLIST = 'SET_OPTIONLIST';
export const SET_TEMPPOWER = 'SET_TEMPPOWER';
export const SET_TEMPINCREASE = 'SET_TEMPINCREASE';
export const SET_TEMPDECREASE = 'SET_TEMPDECREASE';
export const SET_TEMPVALUE = 'SET_TEMPVALUE';

export const setOptionList = (list) => {
    return {
        type: SET_OPTIONLIST,
        lists: list
    }
}

export const setTempPower = (value) => {
    return {
        type: SET_TEMPPOWER,
        on: value
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

export const setTempValue = (value) => {
    return {
        type: SET_TEMPVALUE,
        diff: value
    }
}