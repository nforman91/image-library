import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getImages = () => {
    return dispatch => {
        dispatch(fetchStart());

        axios.get('https://statsapi.web.nhl.com/api/v1/teams/')
        .then(res => {
            const images = res.data.teams
            dispatch(fetchSuccess(images))
        })
        .catch(err => {
            dispatch(fetchFail('Was not able to load image!'))
        })
    }
}

export const fetchStart = () => {
    return ({ type: FETCH_START });
}

export const fetchSuccess = (images) => {
    return ({ type: FETCH_SUCCESS, payload: images });
}

export const fetchFail = (error) => {
    return ({ type: FETCH_FAIL, payload: error });
}
