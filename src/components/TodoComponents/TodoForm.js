import React, { Component } from 'react';

class TodoForm extends Component {
    constactor() {
        super();
        this.state = { 
            id: Date.now()

        }
    }
}

handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

submitItem = event => {
    event.preventDefault()
    this.props.addItem(this.state.item)
}

render() {
    return (
        <form onSubmit={this.submitItem}/>
        <input type="text" value={this.item} name="item" onChange={this.handleChanges} />
        <button>Add Todo</button>
    )
}

export default TodoForm;