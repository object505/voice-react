import {
    NEWS_FAILED,
    NEWS_IS_LOADING,
    NEWS_SUCCESS
} from '../constants/actions';

// export const NewsAdd = (article) => {
//     return {
//         type: NEWS_ADD,
//         payload: article
//     }
// }

// export const NewsRemove = (id) => {
//     return {
//         type: NEWS_REMOVE,
//         payload: id
//     }
// }

export const newsFetch = () => {
    return (dispatch) => {
        dispatch(newsIsLoading())
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch(newsSuccess(data)))
        .catch(() => dispatch(newsFailed()))
    }
}

export const newsSuccess = (news) => {
    return {
        type: NEWS_SUCCESS,
        payload: news
    }
}

export const newsFailed = () => {
    return {
        type: NEWS_FAILED
    }
}

export const newsIsLoading = () => {
    return {
        type: NEWS_IS_LOADING
    }
}