import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import AboutCompany from './AboutCompany';
import AboutPeople from './AboutPeople';

class About extends React.Component {
    render () {
        return (
            <div>
                <h1>About!</h1>
                <Link to="/about-us/company">Company</Link>
                <Link to="/about-us/people">People</Link>
                <Switch>
                    <Route exact path="/about-us/company" component={AboutCompany} />
                    <Route exact path="/about-us/people" component={AboutPeople} />
                    <Route path="/about-us" render={() => <h3>Click on the sub-nav links</h3> } />
                </Switch>
            </div>
        );
    }
}

export default About;