import React from "react";

class List extends React.Component {

    removeItem (i) {
        this.props.removeHandler(i);
    }

    render () {
        return (
            <ul>
                {this.props.items.map((v, i) => <li key={i}>
                    {v}
                    <button onClick={this.removeItem.bind(this, i)}>&times;</button>
                </li>)}
            </ul>
        )
    }
}

export default List;