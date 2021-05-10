import { SET_OPTIONLIST } from '../actions/Option';
import windowImg from './../assets/images/window.png'
import curtainImg from './../assets/images/curtain.png';
import doorImg from './../assets/images/door.png';
import lightImg from './../assets/images/light.png';

const optionIntialState = {
    lists: [
        {
            id: 1,
            title: "Door",
            on: false,
            img: doorImg
        }, 
        {
            id: 2,
            title: "Light",
            on: false,
            img: lightImg
        },
        {
            id: 3,
            title: "Window",
            on: false,
            img: windowImg
        },
        {
            id: 4,
            title: "Curtain",
            on: false,
            img: curtainImg
        }
    ]
}

const option = (state = optionIntialState, action) => {
    switch (action.type) {
        case SET_OPTIONLIST:
            for(let i=0;i<4;i++) {
                action.lists.splice(i,1, {id: state.lists[i].id, title: state.lists[i].title, on: action.lists[i].status, img: state.lists[i].img})
            }
            return Object.assign({}, state, {
                lists: action.lists
            })
        default:
            return state;
    }
}

export default option;