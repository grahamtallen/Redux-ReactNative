/**
 * Created by grahamallen on 12/24/16.
 */
import { combineReducers } from 'redux';
import booksReducer from './books'
import activeBookReducer from './activeBook'
import weather from './weather'
import spinner from './spinner'
import route from './route'

const rootReducer = combineReducers({
    weather,
    spinner,
    route
});

export default rootReducer;