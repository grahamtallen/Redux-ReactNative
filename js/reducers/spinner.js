/**
 * Created by grahamallen on 12/25/16.
 */
export default (state = null, action) => {
    switch (action.type) {
        case "SHOW_SPINNER":
            return true
    }

    switch (action.type) {
        case "FETCH_WEATHER":
            return false;
    }

    return state
}