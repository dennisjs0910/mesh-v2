import { SORT_TIMELINE } from "../actions/types";
import { sortByTime } from "../sortUtils";

const initialState = {
    key: 'media',
    isAsc: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SORT_TIMELINE: {
            let isSameKey = state.key === action.payload.key;
            return {key: action.payload.key, isAsc: (isSameKey) ? !state.isAsc : state.isAsc};
        }
        default:
            return state;
    }
}