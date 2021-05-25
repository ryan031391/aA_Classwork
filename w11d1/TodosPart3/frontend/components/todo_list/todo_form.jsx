import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            // id: Math.floor(Math.random() * 1000),
            title: "",
            body: "",
            done: false
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchTodos()
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("this.state")
        // const todo = Object.assign({}, this.state);
        this.props.createTodo(this.state)
        // this.state = {
            // id: Math.floor(Math.random() * 1000),
        //     title: "",
        //     body: "",
        //     done: "false"
        // }
    }

    updateTitle (e) {
        this.setState({title: e.target.value})
    }

    updateBody (e) {
        this.setState({body: e.target.value})
    }

    render() {
        return (
            <form onSubmit= {this.handleSubmit}>
                <label>Title: 
                    <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                </label>
                <label>Body:
                    <input type="text" value={this.state.body} onChange={this.updateBody}/>
                </label>
                <button type="submit">Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;