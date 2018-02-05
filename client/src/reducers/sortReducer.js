import { SORT_TIMELINE } from "../actions/types";
import { sortByTime } from "../sortUtils";

const initialState = {
    key: 'media',
    isAsc: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SORT_TIMELINE: {
            console.log(action);
            let isSameKey = state.key === action.payload;
            return {key: action.payload, isAsc: (isSameKey) ? !state.isAsc : state.isAsc};
        }
        default:
            return state;
    }
}