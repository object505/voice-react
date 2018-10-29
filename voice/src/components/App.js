import React from "react";
import ListForm from "./ListForm";
import List from "./List";
import Posts from "./Posts";
import PostDetail from './PostDetail';
import PostAdmin from './PostAdmin';
import Login from './Login';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import News from './News';

class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            items: [
                "item 1",
                "item 2",
                "item 3",
            ],
            posts: []
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    componentDidMount () {
        console.log('didmount');
    }

    componentWillMount () {
        console.log('willmount');
    }

    componentDidUpdate () {
        console.log('componentdidupdate');
    }

    shouldComponentUpdate () {
        console.log('shouldupdate');
        return true;
    }

    addItem (item) {
        this.setState({items: [...this.state.items, item]})
    }

    removeItem (i) {
        console.log('= ' + i);
        // this.setState({
        //     items: [
        //         ...this.state.items.slice(0, i),
        //         ...this.state.items.slice(i+1, this.state.items.length)
        //     ]
        // });
        this.setState({
            items: [
                ...this.state.items.filter((v, ix) => ix !== i)
            ]
        });
    }

    render () {
        return (
            <div>
                {/* <ListForm add={this.addItem} /> */}
                {/* <List items={this.state.items} removeHandler={this.removeItem}/> */}
                {/* <Posts /> */}
                <Link to="/admin">Admin</Link>
                <Link to="/login">Login</Link>
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route path="/post/:id" component={PostDetail} />
                    <PrivateRoute path="/admin" someVar="test" component={PostAdmin} />
                    <Route exact path="/login" component={Login} />
                </Switch>
                {/* <Route path="/admin" component={PostAdmin} /> */}
                {/*<Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about-us" component={About} />
                    <Route path="/news/:id" component={News} />
                </Switch> */}
            </div>
        )
    }
}

const PrivateRoute = ({component: Component, someVar, ...other}) => {
    let loggedIn = true;
    console.log(someVar);
    return (
        window.sessionStorage.getItem('loggedin') ?
        <Component {...other} /> :
        <Redirect to="/" />
    );
}

export default App;