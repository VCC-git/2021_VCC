export const SET_OPTIONLIST = 'SET_OPTIONLIST';

export const setOption = (list) => {
    return {
        type: SET_OPTIONLIST,
        lists: list
    }
}