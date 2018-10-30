import {NEWS_ADD, NEWS_REMOVE} from '../constants/actions';

export const NewsAdd = (article) => {
    return {
        type: NEWS_ADD,
        payload: article
    }
}

export const NewsRemove = (id) => {
    return {
        type: NEWS_REMOVE,
        payload: id
    }
}