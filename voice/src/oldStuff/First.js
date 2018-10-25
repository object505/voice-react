import React from "react";

export class First extends React.Component {
    render() {
        return (
            <h2 onClick={this.props.handler}>Hello again {this.props.name}...</h2>
        )
    }
}

export const Second = () => {
    return (
        <h3>H3 dumb component...</h3>
    )
}

export const Third = <h4>The dumbest component...</h4>