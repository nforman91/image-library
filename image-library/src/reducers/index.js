import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";

const initialState = {
    images: {
        name: '',
        conference: {
            name: '',
        },
        division: {
            name: '',
        },
        officialSiteUrl: '',
    },
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_START):
            return({
                ...state,
                isFetching: false,
                error: ''
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                images: action.payload,
                isFetching: false,
                error: ''
            });
        case(FETCH_FAIL):
            return({
                ...state,
                isFetching: false,
                error: action.payload
            });
        default:
            return state;
    }
};

export default reducer;
