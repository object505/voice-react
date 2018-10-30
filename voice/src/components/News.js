import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
}

class ConnectedNews extends React.Component {
    render () {
        return (
            <div>
                {this.props.news.map((n) => <div key={n.id}><h2>{n.title}</h2><p>{n.body}</p></div>)}
            </div>
        )
    }
}

const News = connect(mapStateToProps)(ConnectedNews);
export default News;