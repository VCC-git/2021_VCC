export const SET_OPTIONLIST = 'SET_OPTIONLIST';

export const setOption = (lists) => {
    return {
        type: SET_OPTIONLIST,
        lists: lists
    }
}