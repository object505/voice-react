import React from 'react';
import {Link} from 'react-router-dom';

class PostAdmin extends React.Component {
    render () {
        return (
            <div>
                <Link to="/">Home</Link>
                <h1>Admin</h1>
            </div>
        );
    }
}

export default PostAdmin;