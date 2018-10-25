import React from "react";
import ListForm from "./ListForm";
import List from "./List";
import Posts from "./Posts";

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
                <ListForm add={this.addItem} />
                <List items={this.state.items} removeHandler={this.removeItem}/>
                <Posts />
            </div>
        )
    }
}

export default App;