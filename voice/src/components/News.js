import React from 'react';
import {connect} from 'react-redux';
import {newsFetch} from '../actions/News'

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newsFetch: () => {
            return dispatch(newsFetch())
        }
    }
}

class ConnectedNews extends React.Component {

    componentDidMount () {
        this.props.newsFetch();
    }

    render () {
        return (
            <div>
                {this.props.news.map((n) => <div key={n.id}><h2>{n.title}</h2><p>{n.body}</p></div>)}
            </div>
        )
    }
}

const News = connect(mapStateToProps, mapDispatchToProps)(ConnectedNews);
export default News;