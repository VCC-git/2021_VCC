import { SET_OPTIONLIST } from '../actions/Option';
import windowImg from './../assets/images/window.png'
import curtainImg from './../assets/images/curtain.png';
import doorImg from './../assets/images/door.png';
import lightImg from './../assets/images/light.png';

const optionIntialState = {
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

const option = (state = optionIntialState, action) => {
    switch (action.type) {
        case SET_OPTIONLIST:
            return Object.assign({}, state, {
                lists: action.list
            })
        default:
            return state;
    }
}

export default option;