import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {

    constructor () {
        super();

        this.state = {
            username: '',
            password: '',
            loggedin: false
        }

        this.usernameChangeHandler =  this.usernameChangeHandler.bind(this);
        this.passwordChangeHandler =  this.passwordChangeHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }

    componentWillMount () {
        if (window.sessionStorage.getItem('loggedin')) {
            this.setState({
                loggedin: true
            });
        }
    }

    loginHandler () {
        if (this.state.username == 'a' && this.state.password == 'aa') {
            window.sessionStorage.setItem('loggedin', true);
            this.setState({
                loggedin: true
            });
        }
    }

    usernameChangeHandler (e) {
        this.setState({
            username: e.target.value
        })
    }

    passwordChangeHandler (e) {
        this.setState({
            password: e.target.value
        })
    }

    render () {
        return (
            this.state.loggedin ?
            <Redirect to="/admin" /> :
            <div>
                username<br/>
                <input type="text" value={this.state.username} onChange={this.usernameChangeHandler} /><br/>
                password<br/>
                <input type="text" value={this.state.password} onChange={this.passwordChangeHandler} /><br/>
                <button onClick={this.loginHandler}>Log in</button>
            </div>
        )
    }
}

export default Login;