import { connect } from 'react-redux'
import todo_list from './todo_list'
// import todo_list_item from './todo_list_item'
import { selectTodos } from '../../reducers/selectors'
import { receiveTodo, removeTodo, fetchTodos, createTodo } from '../../actions/todo_actions'


const mapStateToProps = state => ({
  todos: selectTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todo_list);