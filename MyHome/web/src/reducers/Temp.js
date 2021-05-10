import { SET_TEMPPOWER, SET_TEMPINCREASE, SET_TEMPDECREASE, SET_TEMPVALUE } from '../actions/Temp';

const tempIntialState = {
    on: false,
    temp: 19
}

const temp = (state = tempIntialState, action) => {
    switch (action.type) {
        case SET_TEMPPOWER:
            return Object.assign({}, state, {
                on: action.on
            })
        case SET_TEMPINCREASE:
            return Object.assign({}, state, {
                temp: state.temp + 1
            })
        case SET_TEMPDECREASE:
            return Object.assign({}, state, {
                temp: state.temp - 1
            })
        case SET_TEMPVALUE:
            return Object.assign({}, state, {
                temp: action.temp
            })
        default:
            return state;
    }
}

export default temp;