import {NEWS_ADD, NEWS_REMOVE} from '../constants/actions';

const initialState = {
    news: [
        {
            id: 123,
            title: 'Some title',
            body: 'body blah blah blah'
        },
        {
            id: 234,
            title: 'Other title',
            body: 'title body blah blah'
        },
        {
            id: 345,
            title: 'A test title',
            body: 'body blah blah blah'
        }
    ]
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEWS_ADD:
            return {...state, news: [...state.news, action.payload]};
        break;
        case NEWS_REMOVE:
            return {...state, news: state.news.filter( n => n.id != action.payload)};
        break;
        default:
            return state;
    }
};
