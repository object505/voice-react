import React from 'react';
import {Link} from 'react-router-dom';

class PostDetail extends React.Component {

    constructor () {
        super();
        this.state = {
            post: {
                title: '',
                body: '',
            }
        }
    }

    componentWillMount () {
        // console.log(this.props.match.params.id);
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
        .then(res => res.json())
        .then(data => {
            this.setState({
                title: data.title,
                body: data.body
            });
        });
    }

    render () {
        return (
            <div>
                <Link to="/">Back</Link>
                <div className="post">
                    <h2>{this.state.title}</h2>
                    <div>{this.state.body}</div>
                </div>
            </div>
        );
    }
}

export default PostDetail;