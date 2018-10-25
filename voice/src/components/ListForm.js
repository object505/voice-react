import React from "react";

class ListForm extends React.Component {

    constructor () {
        super();
        this.state = {field: ''};

        this.changeHandler = this.changeHandler.bind(this);
        this.submitItem = this.submitItem.bind(this);
    }

    changeHandler (e) {
        this.setState({field: e.target.value});
        console.log(this.state.field);
    }

    submitItem () {
        if (this.state.field.trim().length != 0) {
            this.props.add(this.state.field);
        }
        this.setState({field: ''});
    }

    render () {
        return (
            <div>
                <input type="text" value={this.state.field} onChange={this.changeHandler} />
                <button onClick={this.submitItem}>Add Item</button>
            </div>
        )
    }
}

export default ListForm;