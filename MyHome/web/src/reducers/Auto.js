import { SET_AUTO } from '../actions/Auto';

const autoIntialState = {
    auto: false
}

const auto = (state = autoIntialState, action) => {
    switch(action.type) {
        case SET_AUTO:
            return Object.assign({}, state, {
                auto: !(state.auto)
            })
        default:
            return state
    }
}

export default auto;