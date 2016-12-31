/**
 * Created by grahamallen on 12/25/16.
 */


export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_WEATHER":
            console.log(action.payload);
            console.log(action.payload.data)
            return state.concat([action.payload.data])
    }

    return state
}