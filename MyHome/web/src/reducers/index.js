import { SET_OPTIONLIST, SET_TEMPPOWER, SET_TEMPINCREASE, SET_TEMPDECREASE, SET_TEMPVALUE } from '../actions';
import { combineReducers } from 'redux';
import windowImg from './../assets/images/window.png'
import curtainImg from './../assets/images/curtain.png';
import doorImg from './../assets/images/door.png';
import lightImg from './../assets/images/light.png';

const optionListIntialState = {
    list: [
        {
            id: 1,
            title: "Window",
            on: false,
            img: windowImg
        }, 
        {
            id: 2,
            title: "Curtain",
            on: false,
            img: curtainImg
        },
        {
            id: 3,
            title: "Door",
            on: false,
            img: doorImg
        },
        {
            id: 4,
            title: "Light",
            on: false,
            img: lightImg
        }
    ]
}

const tempPowerIntialState = {
    value: false
}

const tempOptionIntialState = {
    diff: 25
}

const optionList = (state = optionListIntialState, action) => {
    switch (action.type) {
        case SET_OPTIONLIST:
            return Object.assign({}, state, {
                lists: action.list
            })
        default:
            return state;
    }
}

const tempPower = (state = tempPowerIntialState, action) => {
    switch (action.type) {
        case SET_TEMPPOWER:
            return Object.assign({}, state, {
                on: action.on
            })
        default:
            return state;
    }
}

const tempOption = (state = tempOptionIntialState, action) => {
    switch (action.type) {
        case SET_TEMPINCREASE:
            return Object.assign({}, state, {
                diff: state.diff + 1
            })
        case SET_TEMPDECREASE:
            return Object.assign({}, state, {
                diff: state.diff - 1
            })
        case SET_TEMPVALUE:
            return Object.assign({}, state, {
                diff: action.diff
            })
        default:
            return state;
    }
}

const reducerApp = combineReducers({
    optionList,
    tempPower,
    tempOption
});

export default reducerApp;