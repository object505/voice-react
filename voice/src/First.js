import React from "react";

export class First extends React.Component {
    render() {
        return (
            <h2 onClick={this.props.handler}>Hello again {this.props.name}...</h2>
        )
    }
}

