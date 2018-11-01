import {
    NEWS_ADD, 
    NEWS_REMOVE,
    NEWS_FAILED,
    NEWS_IS_LOADING,
    NEWS_SUCCESS
} from '../constants/actions';

const initialState = {
    news: [],
    newsIsLoading: false,
    newsFailed: false
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEWS_SUCCESS:
            console.log(action.payload);
            return {...state, newsFailed: false, newsIsLoading: false, news: [...state.news, ...action.payload]};
        break;
        case NEWS_FAILED:
            return {...state, newsFailed: true};
        break;
        case NEWS_IS_LOADING:
            return {...state, newsIsLoading: true};
        break;
        default:
            return state;
    }
};
