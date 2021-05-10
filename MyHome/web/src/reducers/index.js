import auto from './Auto';
import option from './Option';
import temp from './Temp';
import { combineReducers } from 'redux';

const reducerApp = combineReducers({
    auto,
    option,
    temp
});

export default reducerApp;