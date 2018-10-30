import React from 'react';
import {connect} from 'react-redux';
import {NewsAdd, NewsRemove} from '../actions/News';

const mapDispatchToProps = (dispatch) => {
    return {
        newsAdd: (news) => {
            return dispatch(NewsAdd(news))
        },
        newsRemove: (id) => {
            return dispatch(NewsRemove(id))
        }
    }
}

class ConnectedNewsForm extends React.Component {

    constructor () {
        super();
    }

    render () {
        return (
            <div>
                <input type="text" placeholder="title" /><br/>
                <input type="text" placeholder="body" /><br/>
                <button>Add news</button>
            </div>
        )
    }
}

const NewsForm = connect(null, mapDispatchToProps)(ConnectedNewsForm);
export default NewsForm;