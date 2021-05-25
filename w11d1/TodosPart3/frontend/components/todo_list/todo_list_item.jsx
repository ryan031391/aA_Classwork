import React from 'react'

class ToDoListItem extends React.Component {
    constructor(props) {
        super(props) 
        // console.log(props)
        this.state = {
            id: this.props.id,
            title: this.props.title,
            body: this.props.body,
            done: this.props.done
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(e) {
    //     e.preventDefault()
    //     const item = Object.assign({}, this.state);
    //     let status = item.done ? "false" : "true"
    //     console.log(status)
    //     this.props.removeTodo(item)
    //     item.setState({
    //         done: status
    //     })
    //     this.props.receiveTodo(item)
    // }

    render() {
        return (
            <div>
                <li key={this.props.id}> Title: {this.props.title} </li>
                <input type="button" value={this.props.done ? "undone" : "done"} onClick={this.handleClick}/>

            </div>
        )
    }
}

export default ToDoListItem