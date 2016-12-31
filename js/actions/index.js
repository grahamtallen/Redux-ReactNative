/**
 * Created by grahamallen on 12/24/16.
 */
import {key} from '../constants/api'
import axios from 'axios'

const FETCH_WEATHER = "FETCH_WEATHER";

const api_url = `http://api.openweathermap.org/data/2.5/weather?appid=${key}`;

export const selectBook = (book) => {
    return {
        type: "BOOK_SELECTED",
        payload: book
    }
}

export const fetchWeather = async (city) => {
    const url = `${api_url}&q=${city},us`;
    console.log(url);

    const request = await axios.get(url);
    console.log('requesst', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export const showSpinner = () => ({type: 'SHOW_SPINNER'})