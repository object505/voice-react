import React from "react";
import styles from "../styles/posts.css"
import {Link} from 'react-router-dom';

class Posts extends React.Component {

    constructor () {
        super();

        this.state = {
            posts: [],
            visiblePosts: [],
            previous: 0,
            next: 5
        }

        this.showNext = this.showNext.bind(this);
        this.showPrevious = this.showPrevious.bind(this);
        this.changeVisible = this.changeVisible.bind(this);
    }

    componentWillMount () {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            this.setState({posts: data})
            this.changeVisible(0);
        });
    }

    showNext () {
        this.changeVisible(this.state.next);
        this.setState({
            previous: this.state.previous + 5,
            next: this.state.next + 5,
        });
    }

    showPrevious () {
        this.changeVisible(this.state.previous);
        this.setState({
            previous: this.state.previous - 5,
            next: this.state.next - 5,
        });
    }

    changeVisible (i) {
        this.setState({
            visiblePosts: [...this.state.posts.slice(i, i+5)]
        });
    }

    render () {
        return (
            <div>
                <div>
                    <button className={styles.btn} onClick={this.showPrevious}>&laquo;</button>
                    <button className={styles.btn} onClick={this.showNext}>&raquo;</button>
                </div>
                {this.state.visiblePosts.map((p, i) => <Post key={i} data={p} />)}
            </div>
        )
    }
}

const bodyClass = {
    fontFamily: 'Comic Sans MS'
};

class Post extends React.Component {
    render () {
        return (
            <div className="post">
                <h2 className="postTitle">
                    <Link to={`/post/${this.props.data.id}`}>{this.props.data.title}</Link>
                </h2>
                <div style={bodyClass}>{this.props.data.body}</div>
            </div>
        )
    }
}

export default Posts;