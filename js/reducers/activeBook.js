/**
 * Created by grahamallen on 12/24/16.
 */


export default (state = null, action) => {
    switch (action.type) {
        case "BOOK_SELECTED":
            return action.payload
    }

    return state
}